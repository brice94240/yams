import mongoose from "mongoose";

import { UserModel } from "./models/UserModel.js";
import { PastryModel } from "./models/PastryModel.js";

import Pastries from "./data/Pastries.js";

async function connect() {
  const conn = await mongoose.connect("mongodb://root:example@mongo:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

async function hydrate() {

    await connect();

    const users = await UserModel.find();

    const pastries = await PastryModel.find();

    if (users) {
      for (const user of users) {
        await user.remove();
      }
    }

    if (pastries) {
      for (const pastry of pastries) {
        await pastry.remove();
      }
    }

    const newPastries = Pastries; 

    await PastryModel.insertMany(newPastries);

    const newUser = new UserModel({
      firstName: "firstname",
      lastName: "lastname",
      email: "user@mail.com",
      password: "$2b$10$6OJ6vBDKZIo1wtfZThg1IO7W3str5VwCxtHJ2xM1bHz5tS3t5KOWy",
      pastriesCount: 0,
      pastries: newPastries,
      wonPastries: []
    });

    await newUser.save();
}

hydrate().then(console.log);

