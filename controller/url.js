const shortid = require("shortid");
const { URL } = require("../models/url");

async function generateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "URL is required" });
  const sId = shortid();
  await URL.create({
    shortId: sId,
    redirectUrl: body.url,
    visitHistory: [],
  });

  return res.json({ id: sId });
}

async function redirectAndUpdate(req, res) {
  const shortID=req.params.Shortid;
  const entry= await URL.findOneAndUpdate({
    shortId:shortID,
  },{
    $push:{
      visitHistory:{
        timestamp: Date.now(),
      }
    }
  })
  res.redirect(entry.redirectUrl);
}

async function analyticsDisplay(req, res) {
  const sID=req.params.Shortid;
  const data=await URL.findOne({shortId:sID});
  return res.json({
    numberOfClicks:data.visitHistory.length,
    history:data.visitHistory,
  });
}

module.exports = { generateNewShortURL,redirectAndUpdate,analyticsDisplay };
