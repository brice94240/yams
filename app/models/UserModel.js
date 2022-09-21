import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  pastriesCount: Number,
  pastries: Array,
  wonPastries: Array,
});

export const UserModel = model("users", UserSchema);

