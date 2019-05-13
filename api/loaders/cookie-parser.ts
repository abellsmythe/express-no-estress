'use strict';

// Dependencies
import chalk from 'chalk';
import * as cookieParser from 'cookie-parser';

export default (app: any) => {
    app.use(cookieParser());

    // tslint:disable-next-line no-console
    console.log(`${chalk.yellow('Cookie Parser')} loaded ${chalk.green('successful')}`);
};
