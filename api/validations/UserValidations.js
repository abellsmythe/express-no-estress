"use strict";

// Dependencies
const { body } = require("express-validator/check");

const UserValidations = {
    create: [
        body("description", "description doesn't exists").exists().isString().trim().escape(),
    ],
    update: [
        body("description", "description doesn't exists").exists().isString().trim().escape(),
    ],
    delete: [
        body("description", "description doesn't exists").exists().isString().trim().escape(),
    ],
};

module.exports = UserValidations;
