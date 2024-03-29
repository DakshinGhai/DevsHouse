const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const Submission = require("../models/submission.js");
const passport = require("passport");
const balanceInSOL = require("../public/js/balance.js");

router.get("/signup", (req, res) => {
  res.render("users/signup.ejs");
});

router.post("/signup", async (req, res) => {
  try {
    let { username, email, password, type, publickey } = req.body;
    const newUser = new User({ email, type, username, publickey });
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    if (registeredUser.type === "Moderator") {
      return res.redirect("/moderator");
    }
    res.redirect("/listings");
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }
});
router.get("/login", (req, res) => {
  res.render("users/login.ejs");
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  async (req, res) => {
    if (req.user.type === "Moderator") {
      return res.redirect("/moderator");
    }
    res.redirect("/listings");
  }
);

router.get("/submission", (req, res) => {
  if (!req.isAuthenticated()) {
    req.flash("error", "You must be logged in to add your brand!");
    return res.redirect("/login");
  }
  res.render("users/submission.ejs");
});

router.get("/submitted", (req, res) => {
  res.render("users/submitted.ejs");
});
router.get("/aboutus", (req, res) => {
  res.render("users/aboutus.ejs");
});

router.get("/wallet", async (req, res) => {
  if (!req.isAuthenticated()) {
    req.flash("error", "You must be logged in to check your balance");
    return res.redirect("/login");
  }

  try {
    console.log(req.user.publickey);
    const balance = await balanceInSOL.getBalanceByPublicKey(
      req.user.publickey
    );

    res.render("users/wallet.ejs", { balance });
  } catch (error) {
    console.error("Error fetching balance:", error);
    req.flash("error", "Failed to fetch balance. Please try again later.");
    return res.redirect("/listings");
  }
});
router.post("/submission", async (req, res) => {
  const newListing = new Submission(req.body);
  await newListing.save();
  res.redirect("/submitted");
});

module.exports = router;
