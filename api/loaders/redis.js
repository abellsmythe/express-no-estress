"use strict";

// Dependencies
const redis = require("redis");
const chalk = require("chalk");

// Environment
const config = require("../../config");

let client;

module.exports = async () => {
    if (!client) {
        client = await redis.createClient(config.redis.url);

        client.on('connect', function() {
            console.log(`${chalk.yellow('Redis')} database connection loaded ${chalk.green('successful')}`);
        });

        client.on('error', function(err) {
            console.log(err);
        });
    }

    return client;
};