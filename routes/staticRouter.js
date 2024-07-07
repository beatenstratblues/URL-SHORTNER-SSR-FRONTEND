const express = require("express");
const {
  homePage,
  signUpPage,
  signInPage,
} = require("../controller/staticControllers");

const router = express.Router();

router.get("/", homePage);
router.get("/signup", signUpPage);
router.get("/signin", signInPage);

module.exports = { router };
