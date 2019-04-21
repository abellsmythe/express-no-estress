"use strict";

// Dependencies
const cors  = require("cors");
const chalk = require("chalk");

// Enviroment
const config    = require("../../config");

module.exports = (app) => {
    // Enable Cross Origin Resource Sharing to all origins by default
    app.use(cors(config.cors));

    console.log(`${chalk.yellow('Cors')} loaded ${chalk.green('successful')}`);
};
