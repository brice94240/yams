export default async function (req, res) {
  const { userId } = req.session;

  if (userId) {
    req.session.destroy();

    res.redirect("/");

    return;
  }

  res.redirect("/");
}
