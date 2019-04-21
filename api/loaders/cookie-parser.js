"use strict";

// Dependencies
const cookieParser  = require("cookie-parser");
const chalk         = require("chalk");

module.exports = (app) => {
    app.use(cookieParser());
    
    console.log(`${chalk.yellow('Cookie Parser')} loaded ${chalk.green('successful')}`);
};
