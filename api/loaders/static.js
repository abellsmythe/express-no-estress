"use strict";

// Dependencies
const path      = require("path");
const express   = require("express");
const chalk     = require("chalk");

module.exports = async (app) => {
    app.use('/static', express.static(path.join(__dirname, '../', 'static')));
    
    console.log(`${chalk.yellow('Static Folder')} loaded ${chalk.green('successful')}`);
};