import crypto from 'crypto'
import { connectDB } from '@/lib/mongodb'
import Subscription from '@/models/Subscription'
import { notifyOwner } from '@/lib/notify'

export async function POST(req: Request) {
  try {
    const body      = await req.text()
    const signature = req.headers.get('x-razorpay-signature')

    if (!signature) {
      return Response.json({ error: 'No signature' }, { status: 400 })
    }
    const expected = crypto
      .createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET!)
      .update(body)
      .digest('hex')

    if (expected !== signature) {
      return Response.json({ error: 'Invalid signature' }, { status: 400 })
    }

    const event = JSON.parse(body)
    console.log('Razorpay event:', event.event)

    if (event.event === 'payment.captured') {
      const { order_id, id: payment_id } = event.payload.payment.entity

      await connectDB()

      // Step 1 — find with plan populated to get durationDays
      const sub = await Subscription.findOne({
        razorpayOrderId: order_id,
        status: 'pending',
      }).populate('planId')

      if (!sub) {
        console.log('Subscription not found or already activated')
        return Response.json({ received: true })
      }

      const durationDays = (sub.planId as any).durationDays || 30

      // Step 2 — update with correct endsAt
      await Subscription.findByIdAndUpdate(sub._id, {
        razorpayPaymentId: payment_id,
        status:   'active',
        startsAt: new Date(),
        endsAt:   new Date(Date.now() + durationDays * 24 * 60 * 60 * 1000),
      })

      // Step 3 — populate user for notification
      await sub.populate('userId')
      console.log('Subscription activated for:', (sub.userId as any).email)

      // Step 4 — notify owner
      await notifyOwner(sub)
    }

    return Response.json({ received: true })

  } catch (error: any) {
    console.error('Razorpay webhook error:', error)
    return Response.json({ error: error.message }, { status: 500 })
  }
}