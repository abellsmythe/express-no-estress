"use strict";

// Dependencies
const { body } = require("express-validator/check");

const UserValidations = {
    create: [
        body("description", "description doesn't exists").exists().isString(),
    ],
    update: [
        body("description", "description doesn't exists").exists().isString(),
    ],
    delete: [
        body("description", "description doesn't exists").exists().isString(),
    ],
};

module.exports = UserValidations;
