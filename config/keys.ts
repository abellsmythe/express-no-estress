'use strict';

const {
    TOKEN_SECRET: tokenSecret = 'my-super-secret-key',
    REFRESH_TOKEN_SECRET: refreshTokenSecret = 'my-super-secret-key',
} = process.env;

export interface Keys {
    refreshTokenSecret: string;
    tokenSecret: string;
}

const keys: Keys = {
    refreshTokenSecret,
    tokenSecret,
};

export default keys;
