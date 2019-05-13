'use strict';

// Dependencies
import chalk from 'chalk';
import * as express from 'express';
import redis from './redis';

// Environment
import config from '../../config';

let limit: any;

export default async (app: any) => {
    if (!limit) {
        const redisclient   = await redis();
        const limiter       = await require('express-limiter')(app, redisclient);

        limit = await limiter({
            expire: config.limiter.expire,
            lookup: config.limiter.lookup,
            method: config.limiter.method,
            path: config.limiter.path,
            onRateLimited: (
                req: express.Request,
                res: express.Response,
                next: express.NextFunction,
            ) => {
                next({ message: 'Rate limit exceeded', statusCode: 429 });
            },
            total: config.limiter.total,
        });

        // tslint:disable-next-line no-console
        console.log(`${chalk.yellow('Limiter')} loaded ${chalk.green('successful')}`);
    }

    return limit;
};
