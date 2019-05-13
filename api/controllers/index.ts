'use strict';

// Dependencies
import * as fs from 'fs';
import * as path from 'path';

interface Controllers {
    [key: string]: any;
}

const controllers: Controllers = {};
const normalizedPath = path.join(__dirname, './');

fs.readdirSync(normalizedPath).forEach((file) => {
    const splitFileName = file.split('.');
    const fileName      = splitFileName[0];

    if (fileName !== 'index' && fileName.includes('Controller')) {
        controllers[fileName] = require(`./${fileName}`);
    }
});

export default controllers;
