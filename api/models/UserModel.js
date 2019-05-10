"use strict";

// Dependencies
const bcrypt    = require('bcrypt');
const mongoose  = require("mongoose");
const Schema    = mongoose.Schema;

// Helpers
const modelSearchByAttributes = require("../helpers/model-search-by-attributes");

const UserSchema = new Schema(
  {
    email: { type: String, required: true, required: true, unique: true, dropDups: true },
    password: { type: String, required: true },
    passwordResetToken: { type: String },
    passwordResetExpires: { type: Date },
    profile: {
      name: { type: String, required: true },
      gender: { type: String },
      location: { type: String },
      website: { type: String },
      picture: { type: String },
    },
  },
  { 
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    }
  }
);

UserSchema.statics.searchByAttributes = function(...args) {
  return modelSearchByAttributes.apply(this, args);
};

/**
 * Password hash middleware.
 */
UserSchema.pre('save', function save(next) {
  const user = this;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

/**
 * Helper method for validating user's password.
 */
UserSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};


module.exports = mongoose.model("User", UserSchema);
