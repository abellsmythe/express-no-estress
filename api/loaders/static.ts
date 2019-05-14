'use strict';

// Dependencies
import chalk from 'chalk';
import express from 'express';
import path from 'path';

export default async (app: any) => {
    app.use('/public', express.static(path.join(__dirname, '../', 'public')));

    // tslint:disable-next-line no-console
    console.log(`${chalk.yellow('Public Static Folder')} loaded ${chalk.green('successful')}`);
};