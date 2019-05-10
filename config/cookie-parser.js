"use strict";

const {
    COOKIE_MAX_AGE: maxAge = 86400000,
    COOKIE_KEYS: keys = "rest-api"
} = process.env;

const cookie = {
    maxAge: parseInt(maxAge, 10),
    keys: [keys],
};

module.exports = cookie;