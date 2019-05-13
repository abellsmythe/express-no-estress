'use strict';

// Dependencies
import chalk from 'chalk';

export default () => {
    require('../events');

    // tslint:disable-next-line no-console
    console.log(`${chalk.yellow('Event Emitter')} loaded ${chalk.green('successful')}`);
};
