import { connectDB } from '@/lib/mongodb'
import User from '@/models/User'

export async function POST(req: Request) {
  const secret = req.headers.get('x-webhook-secret')

  if (secret !== process.env.CLERK_WEBHOOK_SECRET) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const evt = await req.json()

  if (evt.type === 'user.created') {
    const { id, email_addresses, first_name, last_name } = evt.data

    await connectDB()

    await User.create({
      clerkId: id,
      email:   email_addresses[0].email_address,
      name:    `${first_name || ''} ${last_name || ''}`.trim(),
    })

    console.log('New user saved:', email_addresses[0].email_address)
  }

  return Response.json({ received: true })
}