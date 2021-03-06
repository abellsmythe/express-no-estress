'use strict';

const config = require("../index");

// configuration
module.exports = {
    baseUrl: {
        examples: 'http://jsonplaceholder.typicode.com',
        local: `http://${config.env.apiDomain}:${config.env.port}`
    }
};