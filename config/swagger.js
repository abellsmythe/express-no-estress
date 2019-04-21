"use strict";

const me = require("../package.json");

const {
    BODY_PARSER_JSON_LIMIT: jsonLimit = "50mb",
    BODY_PARSER_RAW_LIMIT: rawLimit = "50mb",
    BODY_PARSER_TEXT_LIMIT: textLimit = "50mb",
} = process.env;

const swagger = {
    swaggerDefinition: {
        info: {
            title: me.name,
            version: me.version,
            description: me.description,
        },
        host: 'localhost:8000', // the host or url of the app
        basePath: '/', // the basepath of your endpoint
    },
    // path to the API docs
    apis: ['api/docs/**/*.yaml'],
};

module.exports = swagger;