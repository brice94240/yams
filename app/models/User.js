import mongoose from "mongoose";
import { UserModel } from "./UserModel.js";

export async function connect() {
  const conn = await mongoose.connect("mongodb://root:example@mongo:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export async function all() {
  const conn = await connect();

  const users = await UserModel.find();

  return users;
}

export async function find(id) {
  const conn = await connect();

  const user = await UserModel.findOne({ _id: id }, { password: 0 });

  return user;
}

export async function userFind(email) {
  const conn = await connect();

  const user = await UserModel.findOne({
    email: email,
  });

  return user;
}

export async function insertOne(user) {
  const conn = await connect();

  await UserModel.create(user);

  return;
}

export async function updateOne(userId, pastriesCount) {
  const conn = await connect();

  await UserModel.updateOne(
    { _id: userId },
    { pastriesCount: pastriesCount }
  );
  
  return;
}

export async function updatePastries(userId, pastries) {
  const conn = await connect();

  await UserModel.updateOne(
    { _id: userId },
    { pastries: pastries }
  );

  return;
}

export async function updateWonPastries(userId, pastry) {
  const conn = await connect();

  await UserModel.updateOne(
    { _id: userId },
    { $push: { wonPastries: pastry } }
  );

  return;
}

