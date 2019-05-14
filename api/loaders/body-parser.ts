'use strict';

// Dependencies
import  bodyParser from 'body-parser';
import chalk from 'chalk';

// Environment
import config from '../../config';

export default (app: any) => {
    // Middleware that transform the raw string of req.body into a json
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json({ limit: config.body.jsonLimit }));
    app.use(bodyParser.raw({ limit: config.body.rawLimit }));
    app.use(bodyParser.text({ limit: config.body.textLimit }));
    app.use(bodyParser.json());
    app.use(bodyParser.raw());
    app.use(bodyParser.text());

    // tslint:disable-next-line no-console
    console.log(`${chalk.yellow('Body Parser')} loaded ${chalk.green('successful')}`);
};
