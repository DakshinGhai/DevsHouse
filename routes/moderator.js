const express = require("express");
const router = express.Router();
const Submission = require("../models/submission.js");
router.get("/", async (req, res) => {
  const allSubmission = await Submission.find({});
  res.render("moderator/index.ejs", { allSubmission });
});
router.get("/:id", async (req, res) => {
  let { id } = req.params;
  const submission = await Submission.findById(id);
  res.render("moderator/show.ejs", { submission });
});
module.exports = router;

router.delete("/:id", async (req, res) => {
  let { id } = req.params;
  console.log(id);
  await Submission.findByIdAndDelete(id);
  res.redirect(`/moderator`);
});
