const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const Userschema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32
    },
    number: {
      type: Number,
      required: true,
      maxlength: 32,
      trim: true
    }
},
  { timestamps: true }
);

module.exports = mongoose.model("task-user", Userschema);
