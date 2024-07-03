const express=require("express");
const {generateNewShortURL, redirectAndUpdate, analyticsDisplay} = require("../controller/url.js");

const urlRouter=express.Router();

urlRouter.post("/",generateNewShortURL);
urlRouter.get("/:Shortid",redirectAndUpdate);
urlRouter.get("/analytics/:Shortid",analyticsDisplay);


module.exports={urlRouter};