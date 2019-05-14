'use strict';

// Dependencies
import fs from 'fs';
import path from 'path';

interface Validations {
    [key: string]: any;
}

const validations: Validations = {};
const normalizedPath = path.join(__dirname, './');

fs.readdirSync(normalizedPath).forEach((file) => {
    const fileName = file.split('.')[0];

    if (fileName !== 'index' && fileName.includes('Validations')) {
        validations[fileName] = require(`./${fileName}`);
    }
});

export default validations;
