"use strict";

const models = {};
const normalizedPath = require("path").join(__dirname, "./");

require("fs").readdirSync(normalizedPath).forEach(function(file) {
    const splitFileName = file.split('.');
    const fileName      = splitFileName[0];

    if (fileName !== 'index' && fileName.includes('Model')) {
        models[fileName] = require(`./${fileName}`);
    }
});

module.exports = models;