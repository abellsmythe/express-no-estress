'use strict';

// Dependencies
import chalk from 'chalk';
import * as cors from 'cors';

// Enviroment
import config from '../../config';

export default (app: any) => {
    // Enable Cross Origin Resource Sharing to all origins by default
    app.use(cors(config.cors));

    // tslint:disable-next-line no-console
    console.log(`${chalk.yellow('Cors')} loaded ${chalk.green('successful')}`);
};
