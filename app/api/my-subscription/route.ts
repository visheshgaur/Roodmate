import { auth } from '@clerk/nextjs/server'
import { connectDB } from '@/lib/mongodb'
import User from '@/models/User'
import Subscription from '@/models/Subscription'


export async function GET() {
  try {
    const { userId } = await auth()
    if (!userId) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()

    const user = await User.findOne({ clerkId: userId })
    if (!user) {
      return Response.json({ error: 'User not found' }, { status: 404 })
    }

    const subscription = await Subscription.findOne({
      userId: user._id,
      status: 'active',
      endsAt: { $gt: new Date() },
    }).populate('planId')

    if (!subscription) {
      
      return Response.json({ success: true, subscription: null })
    }

    return Response.json({ success: true, subscription })

  } catch (error: any) {
    
    return Response.json({ error: error.message }, { status: 500 })
  }
}