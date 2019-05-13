'use strict';

// Dependencies
import chalk from 'chalk';
import * as compression from 'compression';

export default (app: any) => {
    // Middleware that compress the response
    app.use(compression());

    // tslint:disable-next-line no-console
    console.log(`${chalk.yellow('Compression')} loaded ${chalk.green('successful')}`);
};
