import mongoose, { Document, Schema } from "mongoose";

export interface IBook extends Document {
  name: string;
  author: string;
  genre: string;
  year: number;
  createdAt: Date;
  updatedAt: Date;
}

const bookSchema = new Schema<IBook>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    genre: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, // Auto-generates `createdAt` & `updatedAt`
  }
);

export default mongoose.model<IBook>("Book", bookSchema);
