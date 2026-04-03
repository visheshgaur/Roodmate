import mongoose, { Schema, Document } from 'mongoose'

export interface ISubscription extends Document {
  userId:            mongoose.Types.ObjectId
  planId:            mongoose.Types.ObjectId
  razorpayOrderId:   string
  razorpayPaymentId?: string
  status:            'pending' | 'active' | 'expired' | 'cancelled'
  startsAt?:         Date
  endsAt?:           Date
  notifiedAt?:       Date
}

const SubscriptionSchema = new Schema<ISubscription>(
  {
    userId:            { type: Schema.Types.ObjectId, ref: 'User', required: true },
    planId:            { type: Schema.Types.ObjectId, ref: 'Plan', required: true },
    razorpayOrderId:   { type: String, required: true, unique: true },
    razorpayPaymentId: { type: String },
    status:            { type: String, enum: ['pending', 'active', 'expired', 'cancelled'], default: 'pending' },
    startsAt:          { type: Date },
    endsAt:            { type: Date },
    notifiedAt:        { type: Date },
  },
  { timestamps: true }
)

export default mongoose.models.Subscription || mongoose.model<ISubscription>('Subscription', SubscriptionSchema)
