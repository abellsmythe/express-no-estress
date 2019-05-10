"use strict";

// Dependencies
const { Strategy: LocalStrategy } = require("passport-local");

const { UserModel } = require("../../../api/models");

module.exports = async (passport) => {
    /**
     * Sign in using Email and Password.
     */
    passport.use(
        new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
            UserModel.findOne({ email: email.toLowerCase() }, (err, user) => {
                if (err) return done(err);

                if (!user) {
                    return done(null, false, { msg: 'Invalid email or password.' });
                }

                user.comparePassword(password, (err, isMatch) => {
                    if (err) return done(err);

                    if (isMatch) {
                    return done(null, user);
                    }

                    return done(null, false, { msg: 'Invalid email or password.' });
                });
            });
        })
    );
}