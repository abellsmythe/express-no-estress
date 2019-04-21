"use strict";

// Package JSON
const me = require("../package.json");

const {
    PORT: port = 8000,
    API_PREFIX: apiPrefix = '/api',
} = process.env;

const swagger = {
    swaggerDefinition: {
        info: {
            title: me.name,
            version: me.version,
            description: me.description,
        },
        host: `localhost:${port}`,
        basePath: `${apiPrefix}/`,
    },
    // path to the API docs
    apis: ['api/docs/**/*.yaml'],
};

module.exports = swagger;