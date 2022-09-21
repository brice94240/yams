import { find } from "../models/User.js";

export default async function (req, res) {
  
  let { userId } = req.session;

  const user = await find(userId);

  res.send({ user: user });
}
