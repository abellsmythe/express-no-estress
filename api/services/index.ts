'use strict';

// Dependencies
import * as fs from 'fs';
import * as path from 'path';

interface Services {
    [key: string]: any;
}

const services: Services = {};
const normalizedPath = path.join(__dirname, './');

fs.readdirSync(normalizedPath).forEach((file) => {
    const splitFileName = file.split('.');
    const fileName      = splitFileName[0];

    if (fileName !== 'index' && fileName.includes('Service')) {
        services[fileName] = require(`./${fileName}`);
    }
});

export default services;
