const mongoose = require("mongoose");

// SCHEMA CREATION
const contentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

// ! COMPILE TO FORM A MODEL

const contentHistory = mongoose.mongo("contentHistory", paymentSchema);
module.exports = contentHistory;