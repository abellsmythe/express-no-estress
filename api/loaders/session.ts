'use strict';

// Dependencies
import chalk from 'chalk';
import session from 'express-session';

// Environment
import config from '../../config';

export default (app: any) => {
    app.use(session({
        cookie: {
            maxAge: config.session.age,
            secure: true,
        },
        name : 'sessionId',
        resave: false,
        saveUninitialized: true,
        secret: config.session.secret,
    }));

    // tslint:disable-next-line no-console
    console.log(`${chalk.yellow('Session')} loaded ${chalk.green('successful')}`);
};
