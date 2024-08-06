const Listing = require("../models/listing.js");

//for index
module.exports.index = async (req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
 };

 //for new
 module.exports.renderNewForm = (req,res)=>{
    res.render("listings/new.ejs");
  };

  //for show route
  module.exports.showListing =async(req,res)=>{
    let {id}=req.params;
    const listing =await Listing.findById(id)
    .populate({
      path:"reviews",
      populate:{path:"author",

       },
     })
    .populate("owner");
    if(!listing){
      req.flash("error","does not exist");
      res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs",{listing});
 };

 //create route
 module.exports.createListing = async (req,res, next)=>{
   let url = req.file.path;
   let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url,filename};
 await newListing.save();
 req.flash("success","New Listing Created!");
 res.redirect("/listings");
};

//edit route
module.exports.editListing=async (req,res)=>{
    let {id}=req.params;
    const listing =await Listing.findById(id);
    if(!listing){
      req.flash("error","does not exist");
      res.redirect("/listings");
    }

    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload","/upload/w_250");
    res.render("listings/edit.ejs",{listing,originalImageUrl});
 };

 //update route
 module.exports.updateListing=async (req,res)=>{
    let {id}=req.params;
    let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});
    
    if(typeof req.file !== "undefined"){
      let url = req.file.path;
    let filename = req.file.filename;
    listing.image = {url,filename};
    await listing.save();
    }
    
    req.flash("success","New Listing updated!");
    res.redirect(`/listings/${id}`);
 };

 //delete route
 module.exports.deleteListing = async(req, res)=>{
    let {id}=req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success","Listing deleted!");
    res.redirect("/listings");
 };