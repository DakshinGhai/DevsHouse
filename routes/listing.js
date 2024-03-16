const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");

//index route
router.get("/", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});
//new route show route ke upar aaega bcz vrna vo usko id samjh raha and error aa raha
//new Route
router.get("/new", async (req, res) => {
  res.render("listings/new.ejs");
});

//show route
router.get("/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
});

//create Route
router.post("/", async (req, res) => {
  const newListing = new Listing(req.body.listing);
  await newListing.save();
  res.redirect("/listings");
});
//edit route
router.get("/:id/edit", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
});

//update Route
router.put("/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect(`/listings/${id}`);
});
//delete Route
router.delete("/:id", async (req, res) => {
  let { id } = req.params;
  console.log(id);
  await Listing.findByIdAndDelete(id);
  res.redirect(`/listings`);
});
module.exports = router;
