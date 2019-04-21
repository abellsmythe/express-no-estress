"use strict";

// Dependencies
const mongoose = require("mongoose");
const chalk = require("chalk");

// Environment
const config = require("../../config");

let db;

module.exports = () => {
    if (!db) {
        // Connect Mongo DB Client
        db = mongoose.createConnection(
            config.db.url,
            {
                useNewUrlParser: true,
                useCreateIndex: true,
                autoIndex: false,
            }
        );
    
        db.once('open', function() {
            console.log(`${chalk.yellow('MongoDB')} database connection loaded ${chalk.green('successful')}`);
        });
    
        db.on('error', function(err) {
            console.log(err);
        });
    }

    return db;
};