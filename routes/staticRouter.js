const express = require("express");
const { homePage } = require("../controller/staticControllers");

const router = express.Router();

router.get("/",homePage);

module.exports = { router };
