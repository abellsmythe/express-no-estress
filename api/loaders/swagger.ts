'use strict';

// Dependencies
import chalk from 'chalk';
import swaggerJSDoc = require('swagger-jsdoc');
import  swaggerUi from 'swagger-ui-express';

// Environment
import config from '../../config';

export default (app: any) => {
    // initialize swagger-jsdoc
    const swaggerSpec = swaggerJSDoc(config.swagger);

    // use swagger-Ui-express for your app documentation endpoint
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    // tslint:disable-next-line no-console
    console.log(`${chalk.yellow('Swagger')} docs loaded ${chalk.green('successful')}`);
};
