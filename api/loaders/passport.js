"use strict";

// Dependencies
const chalk     = require("chalk");
const passport  = require("passport");

// Environment
const passportStrategies = require("../../config/passport");

module.exports = async (app) => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
        done(err, user);
        });
    });
  
    app.use(passport.initialize());
    app.use(passport.session());

    await passportStrategies(passport);
  
    console.log(`${chalk.yellow('Passport')} loaded ${chalk.green('successful')}`);
};