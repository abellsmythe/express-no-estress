'use strict';

// Dependencies
import chalk from 'chalk';
import * as helmet from 'helmet';

export default (app: any) => {
    app.use(helmet());

    // tslint:disable-next-line no-console
    console.log(`${chalk.yellow('Helmet')} loaded ${chalk.green('successful')}`);
};
