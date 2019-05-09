"use strict";

// Dependencies
const path      = require("path");
const express   = require("express");
const chalk     = require("chalk");

module.exports = async (app) => {
    app.use('/public', express.static(path.join(__dirname, '../', 'public')));
    
    console.log(`${chalk.yellow('Public Static Folder')} loaded ${chalk.green('successful')}`);
};