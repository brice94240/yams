import mongoose from "mongoose";
import { PastryModel } from "./PastryModel.js";

export async function connect() {
  const conn = await mongoose.connect("mongodb://root:example@mongo:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export async function all() {
  const conn = await connect();

  const pastries = await PastryModel.find();

  return pastries;
}

export async function find(id) {
  const conn = await connect();

  const pastry = await PastryModel.findOne({ _id: id });

  return pastry;
}

