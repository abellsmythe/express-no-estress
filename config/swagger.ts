'use strict';

// Package JSON
import * as me from '../package.json';

const {
    PORT: port = '3000',
    API_DOMAIN: apiDomain = 'localhost',
    API_PREFIX: apiPrefix = '/api',
} = process.env;

export interface Swagger {
    apis: string[];
    swaggerDefinition: {
        basePath: string;
        host: string;
        info: {
            title: string;
            version: string;
            description: string;
        };
    };
}

const swagger: Swagger = {
    // path to the API docs
    apis: ['api/docs/**/*.yaml'],
    swaggerDefinition: {
        basePath: `${apiPrefix}/`,
        host: `${apiDomain}:${port}`,
        info: {
            title: me.name,
            version: me.version,
            description: me.description,
        },
    },
};

export default swagger;
