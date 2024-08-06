const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const {validateReview,isLoggedIn,isReviewAuthor} = require("../middleware.js");
const reviewControllers = require("../controllers/reviews.js");
//Reviews
//Post route
 router.post("/",isLoggedIn,validateReview,wrapAsync(reviewControllers.review));
 
  //Delete route
   router.delete("/:reviewId", isLoggedIn,isReviewAuthor, wrapAsync(reviewControllers.deleteReview));

  module.exports = router;