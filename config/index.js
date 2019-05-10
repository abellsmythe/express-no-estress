"use strict";

// Dependencies
const dotenv  = require("dotenv");

const envFound = dotenv.config();
if (!envFound) {

  // This error should crash whole process
  throw new Error('Couldn\'t find .env file');
}

const body    = require("./body-parser");
const cookie  = require("./cookie-parser");
const cors    = require("./cors");
const db      = require("./db");
const env     = require("./env");
const keys    = require("./keys");
const limiter = require("./limiter");
const session = require("./session");
const swagger = require("./swagger");
const redis   = require("./redis");

module.exports = {
  body,
  cookie,
  cors,
  db,
  env,
  keys,
  limiter,
  session,
  swagger,
  redis,
};
