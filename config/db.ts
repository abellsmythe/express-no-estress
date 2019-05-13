'use strict';

const {
    DB_USER: user,
    DB_PASSWORD: password,
    DB_HOST: host = 'localhost',
    DB_PORT: port = '27017',
    DB_NAME: database = 'rest-api',
} = process.env;

const url = [
    'mongodb://',
    user && password ? `${user}:${password}@` : '',
    host,
    `:${port}`,
    `/${database}`,
].join('');

export interface Db {
    database: string;
    host: string;
    password: string | undefined;
    port: number;
    url: string;
    user: string | undefined;
}

const db: Db = {
    database,
    host,
    password,
    port: parseInt(port, 10),
    url,
    user,
};

export default db;
