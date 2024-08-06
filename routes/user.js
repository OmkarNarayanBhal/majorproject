const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {saveRedirectUrl}=require("../middleware.js");
const userControllers = require("../controllers/users.js");

router.route("/signup").get(userControllers.signup)
.post(wrapAsync(userControllers.signupUser));

router.route("/login").get(userControllers.signinUser)
.post(saveRedirectUrl, passport.authenticate("local", {failureRedirect:'/login', failureFlash: true}), userControllers.loginUser);

router.get("/logout",userControllers.logoutUser);

module.exports = router;