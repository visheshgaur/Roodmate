import mongoose, { Schema, Document } from 'mongoose'

export interface IPlan extends Document {
  name: string
  description: string
  price: number       // in paise (₹ × 100)
  durationDays: number
  meals: string[]
  isActive: boolean,
  billing: 'weekly' | 'monthly'

}

const PlanSchema = new Schema<IPlan>(
  {
    name:         { type: String, required: true },
    description:  { type: String, required: true },
    price:        { type: Number, required: true },
    durationDays: { type: Number, required: true },
    meals:        [{ type: String }],
    isActive:     { type: Boolean, default: true },
    billing:      { type: String, enum: ['weekly', 'monthly'], default: 'weekly' },
  },
  { timestamps: true }
)

export default mongoose.models.Plan || mongoose.model<IPlan>('Plan', PlanSchema)