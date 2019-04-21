"use strict";

const services = {};
const normalizedPath = require("path").join(__dirname, "./");

require("fs").readdirSync(normalizedPath).forEach(function(file) {
    const splitFileName = file.split('.');
    const fileName      = splitFileName[0];

    if (fileName !== 'index') {
        services[fileName] = require(`./${fileName}`);
    }
});

module.exports = async (app) => {
    await Object.entries(services).forEach(async ([name, service]) => {
        await service(app);
    });
};
