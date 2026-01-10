const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    transactionType: {
      type: String,
      required: true,
      trim: true,
      enum: ["income", "expense"],
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      trim: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      trim: true,
      required: true,
    },
    notes: {
      type: String,
      trim: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const transactionModel = mongoose.model("Transaction", transactionSchema);
module.exports = transactionModel;
