'use strict';

// Dependencies
import chalk from 'chalk';
import * as redis from 'redis';

// Environment
import config from '../../config';

let client: any;

export default async () => {
    if (!client) {
        client = await redis.createClient(config.redis.url);

        client.on('connect', () => {
            // tslint:disable-next-line no-console
            console.log(`${chalk.yellow('Redis')} connection loaded ${chalk.green('successful')}`);
        });

        client.on('error', (err: Error) => {
            // tslint:disable-next-line no-console
            console.log(err);
        });
    }

    return client;
};
