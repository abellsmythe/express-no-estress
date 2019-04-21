"use strict";

// Dependencies
const redis = require("redis");
const chalk = require("chalk");

let client;

module.exports = () => {
    if (!client) {
        client = redis.createClient();

        client.on('connect', function() {
            console.log(`${chalk.yellow('Redis')} database connection loaded ${chalk.green('successful')}`);
        });

        client.on('error', function(err) {
            console.log(err);
        });
    }

    return client;
};