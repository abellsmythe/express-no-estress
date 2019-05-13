'use strict';

const {
    LIMITER_PATH: path = '*',
    LIMITER_METHOD: method = 'all',
    LIMITER_LOOKUP: lookup = 'connection.remoteAddress',
    // 150 requests per hour
    LIMITER_TOTAL: total = '150',
    LIMITER_EXPIRE: expire = '3600000', // one hour in milliseconds
} = process.env;

export interface Limiter {
    expire: number;
    method: string;
    lookup: string[];
    path: string;
    total: number;
}

const limiter: Limiter = {
    expire: parseInt(expire, 10),
    method,
    lookup: [lookup],
    path,
    total: parseInt(total, 10),
};

export default limiter;
