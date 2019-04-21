"use strict";

// Dependencies
const mongoose = require("mongoose");
const chalk = require("chalk");

// Environment
const config = require("../../config");

let db;

module.exports = async () => {
    if (!db) {
        // Connect Mongo DB Client
        db = await mongoose.connect(
            config.db.url,
            {
                useNewUrlParser: true,
                useCreateIndex: true,
                autoIndex: false,
            }
        );
    
        console.log(`${chalk.yellow('MongoDB')} database connection loaded ${chalk.green('successful')}`);
    }

    return db;
};