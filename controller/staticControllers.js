const {URL}=require("../models/url");

async function homePage(req, res) {
  const allUrls = await URL.find({});
  return res.render("home.ejs", { allUrls });
}

module.exports={homePage};
