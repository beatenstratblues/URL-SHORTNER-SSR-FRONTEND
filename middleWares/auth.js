const { GetUser } = require("../services/auth");

function GenerateUrlOnlyIfLoggedIn(req,res,next){
    const uid=req.cookies?.uid;
    if(!uid) return res.redirect("/signin");
    const user= GetUser(uid); //checks for currently logged in users
    if(!user) return res.redirect("/signin");
    req.user=user;
    next();
}

module.exports={GenerateUrlOnlyIfLoggedIn};