"use strict";

// Dependencies
const redis = require("redis");

const chalk = require("chalk");

const client = redis.createClient();

client.on('connect', function() {
    console.log(`${chalk.yellow('Redis')} database connection ${chalk.green('successful')}`);
});

client.on('error', function(err) {
    console.log(err);
});

module.exports = client;