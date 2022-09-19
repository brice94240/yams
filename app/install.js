import mongoose from "mongoose";

import { UserModel } from "./models/UserModel.js";

async function connect() {
  const conn = await mongoose.connect("mongodb://root:example@mongo:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

async function hydrate() {

    await connect();

    const users = await UserModel.find();

    if (users) {
      for (const user of users) {
        await user.remove();
      }
    }

    const newUser = new UserModel({
      firstName: "firstname",
      lastName: "lastname",
      email: "user@mail.com",
      password: "$2b$10$6OJ6vBDKZIo1wtfZThg1IO7W3str5VwCxtHJ2xM1bHz5tS3t5KOWy",
    });

    await newUser.save();
}

hydrate().then(console.log);

