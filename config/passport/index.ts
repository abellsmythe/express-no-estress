'use strict';

// Dependencies
import fs from 'fs';
import path from 'path';

interface Strageies {
    [key: string]: any;
}

const strategies: Strageies = {};
const normalizedPath = path.join(__dirname, './strategies');

fs.readdirSync(normalizedPath).forEach((file) => {
    const fileName = file.split('.')[0];

    strategies[fileName] = require(`./strategies/${fileName}`);
});

export default async (passport: any) => {
    const strategiesList = Object.entries(strategies);
    for (const [_, strategy] of strategiesList) {
        await strategy(passport);
    }
};
