const User = require("../models/user.js");

module.exports.signup =(req,res)=>{
    res.render("users/signup.ejs");
};

module.exports.signupUser = async(req,res)=>{
    try{
        let{username, email, password} = req.body;
    const newUser = User({email, username});
   const registeredUser= await User.register(newUser, password);
   console.log(registeredUser);
   req.login(registeredUser,(err)=>{
    if(err){
        return next(err);
      }
      req.flash("success","Welcome to StayHub");
   res.redirect("/listings")
  });
    }catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    }
};

module.exports.signinUser=(req,res)=>{
    res.render("users/login.ejs")
};

module.exports.loginUser = async(req,res)=>{
    req.flash("success","welcome back to StayHub");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.logoutUser = (req,res,next)=>{
    req.logout((err)=>{
        if(err){
          return next(err);
        }
        req.flash("success","you are logged out!");
        res.redirect("/listings")
    })
};