"use strict";

module.exports = (app) => {
    const redis = require("./redis");
    const limiter = require("express-limiter")(app, redis);

    limiter({
        path: '*',
        method: 'all',
        lookup: ['connection.remoteAddress'],
        // 150 requests per hour
        total: 150,
        expire: 1000 * 60 * 60,
        onRateLimited: function (req, res, next) {
            next({ message: 'Rate limit exceeded', statusCode: 429 });
        }
    });
};
