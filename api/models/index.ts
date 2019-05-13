'use strict';

// Dependencies
import * as fs from 'fs';
import * as path from 'path';

interface Models {
    [key: string]: any;
}

const models: Models = {};
const normalizedPath = path.join(__dirname, './');

fs.readdirSync(normalizedPath).forEach((file) => {
    const splitFileName = file.split('.');
    const fileName      = splitFileName[0];

    if (fileName !== 'index' && fileName.includes('Model')) {
        models[fileName] = require(`./${fileName}`);
    }
});

export default models;
