const { USERS } = require("../models/users");
const { setUid } = require("../services/auth");

async function handleUserSignUp(req, res) {
  const body = req.body;
  await USERS.create({
    name: body.name,
    email: body.email,
    password: body.password,
  });

  return res.redirect("/");
}

async function handleUserSignIn(req, res) {
  const { email, password } = req.body;
  const user = await USERS.findOne({ email, password });
  if (!user)
    return res.render("login.ejs", {
      error: "The email or password was wrong!!",
    });

  const token = setUid(user);
  res.cookie("JwtToken", token);
  return res.redirect("/");
}

module.exports = { handleUserSignUp, handleUserSignIn };
