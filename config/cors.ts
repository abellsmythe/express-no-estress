'use strict';

const {
  CORS_ORIGIN: origin = true,
  CORS_METHODS: methods = 'GET,HEAD,PUT,PATCH,POST,DELETE',
  CORS_CREDENTIALS: credentials = true,
  RESPONSE_HEADER_TOKEN: responseHeaderToken = 'x-auth-token',
  RESPONSE_HEADER_REFRESH_TOKEN: responseHeaderRefreshToken = 'x-auth-refresh-token',
} = process.env;

export interface Cors {
  credentials: boolean;
  exposedHeaders: string[];
  methods: string;
  origin: boolean;
}

const cors: Cors = {
  credentials: !!credentials,
  exposedHeaders: [responseHeaderToken, responseHeaderRefreshToken],
  methods,
  origin: !!origin,
};

export default cors;
