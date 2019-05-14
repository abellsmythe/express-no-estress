'use strict';

// Dependencies
import fs from 'fs';
import path from 'path';

interface Events {
    [key: string]: any;
}

const events: Events = {};
const normalizedPath = path.join(__dirname, './');

fs.readdirSync(normalizedPath).forEach((file) => {
    const fileName = file.split('.')[0];

    if (fileName !== 'index' && fileName.includes('Event')) {
        events[fileName] = require(`./${fileName}`);
    }
});

export default events;
