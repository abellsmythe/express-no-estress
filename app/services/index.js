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

module.exports = (app) => {
    Object.entries(services).forEach(([name, service]) => {
        service(app);
    });
};
