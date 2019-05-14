'use strict';

// Dependencies
import fs from 'fs';
import path from 'path';

interface Models {
    [key: string]: any;
}

const models: Models = {};
const normalizedPath = path.join(__dirname, './');

fs.readdirSync(normalizedPath).forEach((file) => {
    const fileName = file.split('.')[0];

    if (fileName !== 'index' && fileName.includes('Model')) {
        models[fileName] = require(`./${fileName}`);
    }
});

export default models;
