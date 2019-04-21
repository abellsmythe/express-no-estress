"use strict";

// Dependencies
const helmet   = require("helmet");
const chalk    = require("chalk");

module.exports = (app) => {
    app.use(helmet());
    
    console.log(`${chalk.yellow('Helmet')} loaded ${chalk.green('successful')}`);
};
