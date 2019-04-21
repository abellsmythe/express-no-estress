"use strict";

const {
    DB_NAME: database = "express-no-estress",
    DB_USER: user,
    DB_PASSWORD: password
} = process.env;

const db = {
    //url: `mongodb://${user}:${password}@ds143143.mlab.com:43143/${database}`,
    url: `mongodb://localhost:27017/${database}`,
    database,
    user, 
    password,
};

module.exports = db;