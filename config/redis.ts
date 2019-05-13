'use strict';

const {
    REDIS_HOST: host = '127.0.0.1',
    REDIS_PORT: port = '6379',
    REDIS_URL: redisurl,
} = process.env;

const url =  redisurl ? redisurl : `redis://${host}:${port}`;

export interface Redis {
    host: string;
    port: number;
    url: string;
}

const redis: Redis = {
    host,
    port: parseInt(port, 10),
    url,
};

export default redis;
