'use strict';

// Dependencies
import * as fs from 'fs';
import * as path from 'path';

// Environment
import config from '../../config';

interface Routes {
    [key: string]: any;
}

const routes: Routes = {};
const normalizedPath = path.join(__dirname, './');

fs.readdirSync(normalizedPath).forEach((file) => {
    const splitFileName = file.split('.');
    const fileName      = splitFileName[0];

    if (fileName !== 'index' && fileName.includes('Routes')) {
        const name = fileName.replace('Routes', '').toLocaleLowerCase();
        routes[name] = require(`./${fileName}`);
    }
});

export default (app: any) => {
    Object.entries(routes).forEach(([name, route]) => {
        app.use(`${config.env.apiPrefix}/${name}`, route);
    });
};
