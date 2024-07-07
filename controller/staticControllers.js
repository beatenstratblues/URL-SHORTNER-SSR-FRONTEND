const { URL } = require("../models/url");

async function homePage(req, res) {
  const allUrls = await URL.find({});
  return res.render("home.ejs", { allUrls });
}
async function signUpPage(req, res) {
  return res.render("signup.ejs");
}
async function signInPage(req, res) {
  return res.render("login.ejs");
}

module.exports = { homePage, signUpPage, signInPage };
