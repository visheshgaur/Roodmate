import { connectDB } from '@/lib/mongodb'
import Plan from '@/models/Plan'


export async function GET() {
  try {
    await connectDB()
    const plans = await Plan.find({ isActive: true })
    return Response.json({ success: true, plans })
  } catch (error: any) {
    
    return Response.json({ success: false, error: error.message }, { status: 500 })
  }
}