const express=require("express");
const {generateNewShortURL, redirectAndUpdate, analyticsDisplay, homePage} = require("../controller/url.js");
const { URL } = require("../models/url.js");

const urlRouter=express.Router();

urlRouter.post("/",generateNewShortURL);
urlRouter.get("/:Shortid",redirectAndUpdate);
urlRouter.get("/analytics/:Shortid",analyticsDisplay);


module.exports={urlRouter};