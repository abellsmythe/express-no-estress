"use strict";

const {
    DB_USER: user,
    DB_PASSWORD: password,
    DB_HOST: host = 'localhost',
    DB_PORT: port = '27017',
    DB_NAME: database = "rest-api",
} = process.env;

let url = [
    'mongodb://',
    user && password ? `${user}:${password}@` : '',
    host,
    `:${port}`,
    `/${database}`,
].join('');

const db = {
    url,
    user, 
    password,
    host,
    port,
    database,
};

module.exports = db;