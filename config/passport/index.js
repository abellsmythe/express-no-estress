"use strict";

const strategies = {};
const normalizedPath = require("path").join(__dirname, "./strategies");

require("fs").readdirSync(normalizedPath).forEach(function(file) {
    const splitFileName = file.split('.');
    const fileName      = splitFileName[0];

    strategies[fileName] = require(`./strategies/${fileName}`);
});


module.exports = async (passport) => {
    const strategiesList = Object.entries(strategies);
    for (const [_, strategy] of strategiesList) {
        await strategy(passport);
    }
};
