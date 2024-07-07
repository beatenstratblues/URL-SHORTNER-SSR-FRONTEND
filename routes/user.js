const express = require("express");
const { handleUserSignUp, handleUserSignIn } = require("../controller/user");

const userRoute = express.Router();

userRoute.post("/", handleUserSignUp);
userRoute.post("/signin", handleUserSignIn)

module.exports = { userRoute };
