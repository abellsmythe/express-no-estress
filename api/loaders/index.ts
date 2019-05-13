'use strict';

// Dependencies
import * as fs from 'fs';
import * as path from 'path';

interface Loaders {
    [key: string]: any;
}

const loaders: Loaders = {};
const normalizedPath: string = path.join(__dirname, './');

fs.readdirSync(normalizedPath).forEach((file) => {
    const splitFileName = file.split('.');
    const fileName      = splitFileName[0];

    if (fileName !== 'index') {
        loaders[fileName] = require(`./${fileName}`);
    }
});

export default async (app: any) => {
    const loadersList = Object.entries(loaders);
    for (const [_, loader] of loadersList) {
        await loader(app);
    }
};
