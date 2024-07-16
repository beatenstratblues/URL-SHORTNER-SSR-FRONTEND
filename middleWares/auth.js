const { GetUser } = require("../services/auth");

function GenerateUrlOnlyIfLoggedIn(req, res, next) {
  const Token = req.cookies?.JwtToken;
  if (!Token) return res.redirect("/signin");
  const user = GetUser(Token); //checks for currently logged in users
  if (!user) return res.redirect("/signin");
  req.user = user;
  next();
}

function checkAuth(req, res, next) {
    const userUid = req.cookies?.JwtToken;
    if(!userUid) return res.redirect("/signin");
    const user = GetUser(userUid);

    req.user = user;
    next();
}

module.exports = { GenerateUrlOnlyIfLoggedIn, checkAuth };
