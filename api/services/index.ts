'use strict';

// Dependencies
import fs from 'fs';
import path from 'path';

interface Services {
    [key: string]: any;
}

const services: Services = {};
const normalizedPath = path.join(__dirname, './');

fs.readdirSync(normalizedPath).forEach((file) => {
    const fileName = file.split('.')[0];

    if (fileName !== 'index' && fileName.includes('Service')) {
        services[fileName] = require(`./${fileName}`);
    }
});

export default services;
