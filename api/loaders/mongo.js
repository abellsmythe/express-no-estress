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
        await mongoose.connect(
            config.db.url,
            {
                useNewUrlParser: true,
                useCreateIndex: true,
                autoIndex: false,
                useFindAndModify: false,
            },
            function (err, client) {
                if (err) {
                    console.log(err);
                } else {
                    db = client;
                    console.log(`${chalk.yellow('MongoDB')} database connection loaded ${chalk.green('successful')}`);
                }
            }
        );
    }

    return db;
};