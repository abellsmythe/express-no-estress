"use strict";

const {
    SESSION_AGE: age = 1209600000, // two weeks in milliseconds
    SESSION_SECRET: secret = 'my-super-secret-key',
} = process.env;

const session = {
    age,
    secret,
};

module.exports = session;