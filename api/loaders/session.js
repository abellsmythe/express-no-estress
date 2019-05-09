"use strict";

// Dependencies
const chalk    = require("chalk");
const session  = require("express-session");

// Environment
const config = require("../../config");

module.exports = (app) => {
    app.use(session({
        cookie: {
            maxAge: config.session.age,
            secure: true,
        },
        name : 'sessionId',
        resave: false,
        saveUninitialized: true,
        secret: config.session.secrete,
    }));
    
    console.log(`${chalk.yellow('Session')} loaded ${chalk.green('successful')}`);
};
