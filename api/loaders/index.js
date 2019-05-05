"use strict";

const loaders = {};
const normalizedPath = require("path").join(__dirname, "./");

require("fs").readdirSync(normalizedPath).forEach(function(file) {
    const splitFileName = file.split('.');
    const fileName      = splitFileName[0];

    if (fileName !== 'index') {
        loaders[fileName] = require(`./${fileName}`);
    }
});

module.exports = async function (app) {
    const loadersList = Object.entries(loaders);
    for (const [_, loader] of loadersList) {
        await loader(app);
    }
};
