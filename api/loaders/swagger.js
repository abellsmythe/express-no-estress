"use strict";

// Dependencies
const swaggerJSDoc  = require('swagger-jsdoc');
const swaggerUi     = require('swagger-ui-express');
const chalk         = require("chalk");

// Environment
const config = require("../../config");

module.exports = (app) => {
    // initialize swagger-jsdoc
    const swaggerSpec = swaggerJSDoc(config.swagger);

    // use swagger-Ui-express for your app documentation endpoint
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    console.log(`${chalk.yellow('Swagger')} docs loaded ${chalk.green('successful')}`);
};
