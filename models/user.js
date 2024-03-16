const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  publickey: {
    type: String,
    required: true,
  },
  balance: {
    type: String,
    default: "0.00",
  },
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);
