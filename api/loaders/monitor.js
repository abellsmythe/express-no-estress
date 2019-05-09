"use strict";

// Dependencies
const chalk                 = require("chalk");
const expressStatusMonitor  = require("express-status-monitor");

module.exports = async (app) => {
    const statusMonitor = expressStatusMonitor();
    app.use(statusMonitor);

    app.get('/status', statusMonitor.pageRoute);
    
    console.log(`${chalk.yellow('Status Monitor')} loaded ${chalk.green('successful')}`);
};