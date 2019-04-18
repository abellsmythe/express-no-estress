"use strict";

// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TestSchema = new Schema(
  {
    description: { type: String, required: true, required: true, unique: true, dropDups: true },
  },
  { 
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    }
  }
);

module.exports = mongoose.model("Test", TestSchema);
