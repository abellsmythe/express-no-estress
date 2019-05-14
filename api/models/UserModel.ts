'use strict';

// Dependencies
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Helpers
import modelSearchByAttributes from '../helpers/model-search-by-attributes';

export interface UserType {
  email: string;
  password: string;
  passwordResetToken: string;
  passwordResetExpires: Date;
  profile: {
    name: string;
    gender: string;
    location: string;
    website: string;
    picture: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, dropDups: true },
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
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  },
);

userSchema.statics.searchByAttributes = function(...args: any[]) {
  return modelSearchByAttributes.call(this, args);
};

/**
 * Password hash middleware.
 */
userSchema.pre('save', function save(next) {
  const user: any = this;

  if (!user.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(10, (errSalt, salt) => {
    if (errSalt) {
      return next(errSalt);
    }

    bcrypt.hash(user.password, salt, (errHash, hash) => {
      if (errHash) {
        return next(errHash);
      }

      user.password = hash;
      next();
    });
  });
});

/**
 * Helper method for validating user's password.
 */
userSchema.methods.comparePassword = function(
  candidatePassword: string,
  cb: (err: Error, isMatch: boolean) => void,
) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};

export default mongoose.model('User', userSchema);
