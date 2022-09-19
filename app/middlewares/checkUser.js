export default function (req, res, next) {
  if (req.session.userId) {
    next();
    return;
  }

  res.redirect("/login");
}
