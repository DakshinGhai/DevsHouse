const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  Brand: {
    type: String,
    required: true,
  },
  Brief: String,
  image: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  },

  location: String,
  target: String,
  tags: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
