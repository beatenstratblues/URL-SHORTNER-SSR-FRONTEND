const { GetUser } = require("../services/auth");

function GenerateUrlOnlyIfLoggedIn(req,res,next){
    const JwtToken=req.cookies?.JwtToken;
    if(!JwtToken) return res.redirect("/signin");
    const user= GetUser(JwtToken); //checks for currently logged in users
    if(!user) return res.redirect("/signin");
    req.user=user;
    next();
}

module.exports={GenerateUrlOnlyIfLoggedIn};