import mongoose from "mongoose";
const { Schema, model } = mongoose;

const PastrySchema = new Schema({
  name: String,
  img: String,
  number: Number,
  order: Number,
});

export const PastryModel = model("pastries", PastrySchema);
