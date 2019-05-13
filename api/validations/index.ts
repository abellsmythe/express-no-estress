'use strict';

// Dependencies
import * as fs from 'fs';
import * as path from 'path';

interface Validations {
    [key: string]: any;
}

const validations: Validations = {};
const normalizedPath = path.join(__dirname, './');

fs.readdirSync(normalizedPath).forEach((file) => {
    const splitFileName = file.split('.');
    const fileName      = splitFileName[0];

    if (fileName !== 'index' && fileName.includes('Validations')) {
        validations[fileName] = require(`./${fileName}`);
    }
});

export default validations;
