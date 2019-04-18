"use strict";

// Dependencies
const redis = require("redis");
const chalk = require("chalk");

module.exports = () => {
    const client = redis.createClient();

    client.on('connect', function() {
        console.log(`${chalk.yellow('Redis')} database connection ${chalk.green('successful')}`);
    });

    client.on('error', function(err) {
        console.log(err);
    });

    return client;
};