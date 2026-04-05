import { auth } from '@clerk/nextjs/server'
import Razorpay from 'razorpay'
import { connectDB } from '@/lib/mongodb'
import User from '@/models/User'
import Plan from '@/models/Plan'
import Subscription from '@/models/Subscription'

const razorpay = new Razorpay({
  key_id:     process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
})

export async function POST(req: Request) {
  try {
    const { userId } = await auth()
    if (!userId) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { planId } = await req.json()
    if (!planId) {
      return Response.json({ error: 'Plan ID is required' }, { status: 400 })
    }

    await connectDB()

    // Get user and plan from MongoDB
    const user = await User.findOne({ clerkId: userId })
    const plan = await Plan.findById(planId)

    if (!user) {
      return Response.json({ error: 'User not found' }, { status: 404 })
    }
    if (!plan) {
      return Response.json({ error: 'Plan not found' }, { status: 404 })
    }

    // Check if user already has an active subscription
    const existing = await Subscription.findOne({
      userId: user._id,
      status: 'active',
    })

    if (existing) {
      return Response.json({ error: 'You already have an active subscription' }, { status: 400 })
    }

    // Create Razorpay order
    const order = await razorpay.orders.create({
      amount:   plan.price,   // already in paise
      currency: 'INR',
      receipt:  `rcpt_${Date.now()}`,
      notes: {
        userId: user._id.toString(),
        planId: plan._id.toString(),
      },
    })

    // Save pending subscription
    await Subscription.create({
      userId:          user._id,
      planId:          plan._id,
      razorpayOrderId: order.id,
      status:          'pending',
    })

    return Response.json({
      success:  true,
      orderId:  order.id,
      amount:   plan.price,
      currency: 'INR',
      planName: plan.name,
    })

  } catch (error: any) {
    console.error('Payment error:', error)
    return Response.json({ success: false, error: error.message }, { status: 500 })
  }
}