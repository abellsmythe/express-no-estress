"use strict";

const controllers = {};
const normalizedPath = require("path").join(__dirname, "./");

require("fs").readdirSync(normalizedPath).forEach(function(file) {
    const splitFileName = file.split('.');
    const fileName      = splitFileName[0];

    if (fileName !== 'index' && fileName.includes('Controller')) {
        controllers[fileName] = require(`./${fileName}`);
    }
});

module.exports = controllers;