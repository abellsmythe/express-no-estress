'use strict';

const {
    COOKIE_MAX_AGE: maxAge = '86400000',
    COOKIE_KEYS: keys = 'rest-api',
} = process.env;

export interface Cookie {
    keys: string[];
    maxAge: number;
}

const cookie: Cookie = {
    keys: [keys],
    maxAge: parseInt(maxAge, 10),
};

export default cookie;
