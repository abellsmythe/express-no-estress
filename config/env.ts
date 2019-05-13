'use strict';

const {
  PORT: port = '3000',
  API_DOMAIN: apiDomain = 'localhost',
  API_PREFIX: apiPrefix = '/api',
  TOKEN_LIFE: tokenLife = '900000',
  REFRESH_TOKEN_LIFE: refreshTokenLife = '7200000',
  REQUEST_HEADER_TOKEN: requestHeaderToken = 'Authorization',
  RESPONSE_HEADER_TOKEN: responseHeaderToken = 'x-auth-token',
  RESPONSE_HEADER_REFRESH_TOKEN: responseHeaderRefreshToken = 'x-auth-refresh-token',
} = process.env;

export interface Env {
  apiDomain: string;
  apiPrefix: string;
  port: number;
  refreshTokenLife: number;
  requestHeaderToken: string;
  responseHeaderToken: string;
  responseHeaderRefreshToken: string;
  tokenLife: number;
}

const env: Env = {
  apiDomain,
  apiPrefix,
  port: parseInt(port, 10),
  refreshTokenLife: parseInt(refreshTokenLife, 10),
  requestHeaderToken,
  responseHeaderToken,
  responseHeaderRefreshToken,
  tokenLife: parseInt(tokenLife, 10),
};

export default env;
