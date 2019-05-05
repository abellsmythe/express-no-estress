"use strict";

const {
    LIMITER_PATH: path = "*",
    LIMITER_METHOD: method = "all",
    LIMITER_LOOKUP: lookup = ["connection.remoteAddress"],
    // 150 requests per hour
    LIMITER_TOTAL: total = 150,
    LIMITER_EXPIRE: expire = 1000 * 60 * 60,
} = process.env;

const limiter = {
    path,
    method,
    lookup,
    total,
    expire,
};

module.exports = limiter;