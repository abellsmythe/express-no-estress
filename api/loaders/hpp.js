"use strict";

// Dependencies
const hpp   = require("hpp");
const chalk = require("chalk");

module.exports = (app) => {
    app.use(hpp());
    
    console.log(`${chalk.yellow('Hpp')} loaded ${chalk.green('successful')}`);
};
