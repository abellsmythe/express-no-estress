'use strict';

// Dependencies
import fs from 'fs';
import path from 'path';

interface Controllers {
    [key: string]: any;
}

const controllers: Controllers = {};
const normalizedPath = path.join(__dirname, './');

fs.readdirSync(normalizedPath).forEach((file) => {
    const fileName = file.split('.')[0];

    if (fileName !== 'index' && fileName.includes('Controller')) {
        controllers[fileName] = require(`./${fileName}`);
    }
});

export default controllers;
