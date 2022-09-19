import { find } from "../models/User.js";

export default async function (req, res) {
  const { userId } = req.session;

  const user = await find(userId);

  res.render("game", user);
}
