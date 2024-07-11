const jwt = require("jsonwebtoken");
const secretKey = "JatinSingh609@#$%"

function setUid(user) {
  return jwt.sign({
    _id: user._id,
    name: user.email
  },secretKey);
}

function GetUser(token) {
  return jwt.verify(token,secretKey);
}

module.exports = { setUid, GetUser };
