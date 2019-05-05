"use strict";

// Dependencies
const chalk = require("chalk");

module.exports = () => {
    require("../events");

    console.log(`${chalk.yellow('Event Emitter')} loaded ${chalk.green('successful')}`);
};
