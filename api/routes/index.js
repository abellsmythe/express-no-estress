"use strict";

// Environment
const config = require("../../config");

const routes = {};
const normalizedPath = require("path").join(__dirname, "./");

require("fs").readdirSync(normalizedPath).forEach(function(file) {
    const splitFileName = file.split('.');
    const fileName      = splitFileName[0];

    if (fileName !== 'index' && fileName.includes('Routes')) {
        routes[fileName] = require(`./${fileName}`);
    }
});

module.exports = (app) => {
    Object.entries(routes).forEach(([name, routes]) => {
        app.use(`${config.env.apiPrefix}/${name}`, routes);
    });

    app.use(function(req, res, next) {
        res.notFound();
    });
};
