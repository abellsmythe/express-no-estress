"use strict";

// Dependencies
const dotenv  = require("dotenv");

const envFound = dotenv.config();
if (!envFound) {

  // This error should crash whole process
  throw new Error('Couldn\'t find .env file');
}

const env     = require("./env");
const db      = require("./db");
const redis   = require("./redis");
const keys    = require("./keys");
const body    = require("./body-parser");
const cookie  = require("./cookie");
const cors    = require("./cors");
const limiter = require("./limiter");
const swagger = require("./swagger");

module.exports = {
  env,
  db,
  redis,
  keys,
  body,
  cookie,
  cors,
  limiter,
  swagger,
};
