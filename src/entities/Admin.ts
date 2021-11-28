import { Schema, model } from 'mongoose';

export interface Admin {
    firstName: string
    lastName: string
    email: string
    contactNumber: number
    city: string
    country: string
    pincode: number
}

const schema = new Schema<Admin>({
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    contactNumber: { type: Number, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    pincode: { type: Number, required: true },
});

export const AdminModel = model<Admin>('Admin', schema);

