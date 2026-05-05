import mongoose, { Schema, Document } from 'mongoose'

export interface IUser extends Document {
  clerkId: string
  email: string
  name: string
  phone?: string
  address?: {
    line1: string
    line2?: string
    city: string
    state: string
    pincode: string
  }
  createdAt: Date
}

const UserSchema = new Schema<IUser>(
  {
    clerkId: { type: String, required: true, unique: true },
    email:   { type: String, required: true },
    name:    { type: String, required: true },
    phone:   { type: String },
    address: {
      line1:   { type: String },
      line2:   { type: String },
      city:    { type: String },
      state:   { type: String },
      pincode: { type: String },
    },
  },
  { timestamps: true }
)

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema)