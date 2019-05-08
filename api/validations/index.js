"use strict";

const validations = {};
const normalizedPath = require("path").join(__dirname, "./");

require("fs").readdirSync(normalizedPath).forEach(function(file) {
    const splitFileName = file.split('.');
    const fileName      = splitFileName[0];

    if (fileName !== 'index' && fileName.includes('Validation')) {
        validations[fileName] = require(`./${fileName}`);
    }
});

module.exports = validations;