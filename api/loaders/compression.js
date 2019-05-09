"use strict";

// Dependencies
const chalk         = require("chalk");
const compression   = require("compression");

module.exports = (app) => {
    // Middleware that compress the response
    app.use(compression());
    
    console.log(`${chalk.yellow('Compression')} loaded ${chalk.green('successful')}`);
};
