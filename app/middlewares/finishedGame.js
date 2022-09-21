import { find } from "../models/User.js";

export default async function (req, res, next) {
  if (req.session.userId) {
    const user = await find(req.session.userId);
    if (user.pastriesCount < 50) {
      next();
      return;
    }
  }

  res.redirect("/game");
}
