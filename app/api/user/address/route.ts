import { auth } from '@clerk/nextjs/server'
import { connectDB } from '@/lib/mongodb'
import User from '@/models/User'

// GET — fetch existing address
export async function GET() {
  try {
    const { userId } = await auth()
    if (!userId) return Response.json({ error: 'Unauthorized' }, { status: 401 })

    await connectDB()
    const user = await User.findOne({ clerkId: userId })
    return Response.json({ success: true, address: user?.address || null })

  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}

// POST — save address
export async function POST(req: Request) {
  try {
    const { userId } = await auth()
    if (!userId) return Response.json({ error: 'Unauthorized' }, { status: 401 })

    const { line1, line2, city, state, pincode } = await req.json()

    if (!line1 || !city || !state || !pincode) {
      return Response.json({ error: 'All fields are required' }, { status: 400 })
    }

    await connectDB()

    await User.findOneAndUpdate(
      { clerkId: userId },
      { address: { line1, line2, city, state, pincode } },
      { new: true }
    )

    return Response.json({ success: true })

  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}