const {
  PORT: port = 8000,
  APP_PROTOCOL = "http",
  APP_HOSTNAME = "localhost",
  APP_PORT = "3000",
  TOKEN_LIFE: tokenLife = 900000,
  REFRESH_TOKEN_LIFE: refreshTokenLife = 7200000,
  REQUEST_HEADER_TOKEN: requestHeaderToken = "Authorization",
  RESPONSE_HEADER_TOKEN: responseHeaderToken = "x-auth-token",
  RESPONSE_HEADER_REFRESH_TOKEN: responseHeaderRefreshToken = "x-auth-refresh-token"
} = process.env;

const APP_URL = `${APP_PROTOCOL ? `${APP_PROTOCOL}://` : ""}${APP_HOSTNAME}${APP_PORT ? `:${APP_PORT}` : ""}/`;

module.exports = {
  port: parseInt(port, 10), 
  APP_PROTOCOL,
  APP_HOSTNAME,
  APP_PORT,
  tokenLife: parseInt(tokenLife, 10),
  refreshTokenLife: parseInt(refreshTokenLife, 10),
  requestHeaderToken,
  responseHeaderToken,
  responseHeaderRefreshToken,
  APP_URL
};
