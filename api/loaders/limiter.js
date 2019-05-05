"use strict";

// Dependencies
const redis = require("./redis");
const chalk = require("chalk");

// Environment
const config = require("../../config");

let limit;

module.exports = async (app) => {
    if (!limit) {
        const redisclient   = await redis();
        const limiter       = await require("express-limiter")(app, redisclient);

        limit = await limiter({
            path: config.limiter.path,
            method: config.limiter.method,
            lookup: config.limiter.lookup,
            total: config.limiter.total,
            expire: config.limiter.expire,
            onRateLimited: function (req, res, next) {
                next({ message: 'Rate limit exceeded', statusCode: 429 });
            }
        });

        console.log(`${chalk.yellow('Limiter')} loaded ${chalk.green('successful')}`);
    }

    return limit;
};
