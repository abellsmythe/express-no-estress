'use strict';

// Dependencies
import chalk from 'chalk';
import * as hpp from 'hpp';

export default (app: any) => {
    app.use(hpp());

    // tslint:disable-next-line no-console
    console.log(`${chalk.yellow('Hpp')} loaded ${chalk.green('successful')}`);
};
