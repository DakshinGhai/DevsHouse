const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const submissionSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  instaid: {
    type: String,
    required: true,
  },
  publickey: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Submission = mongoose.model("Submission ", submissionSchema);
module.exports = Submission;
