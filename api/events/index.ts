'use strict';

// Dependencies
import * as fs from 'fs';
import * as path from 'path';

interface Events {
    [key: string]: any;
}

const events: Events = {};
const normalizedPath = path.join(__dirname, './');

fs.readdirSync(normalizedPath).forEach((file) => {
    const splitFileName = file.split('.');
    const fileName      = splitFileName[0];

    if (fileName !== 'index' && fileName.includes('Event')) {
        events[fileName] = require(`./${fileName}`);
    }
});

export default events;
