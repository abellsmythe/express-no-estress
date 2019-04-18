"use strict";

// Dependencies
const mongoose = require("mongoose");
const chalk = require("chalk");

// Environment
const config = require("../../config");

module.exports = () => {
    // Connect Mongo DB Client
    const db = mongoose.createConnection(
        config.db.url,
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            autoIndex: false,
        }
    );

    db.once('open', function() {
        console.log(`${chalk.yellow('MongoDB')} database connection ${chalk.green('successful')}`);
    });

    db.on('error', function(err) {
        console.log(err);
    });

    return db;
};