'use strict';

// Dependencies
import dotenv from 'dotenv';

const envFound = dotenv.config();
if (!envFound) {

  // This error should crash whole process
  throw new Error('Couldn\'t find .env file');
}

import body from './body-parser';
import cookie from './cookie-parser';
import cors from './cors';
import db from './db';
import env from './env';
import keys from './keys';
import limiter from './limiter';
import redis from './redis';
import session from './session';
import swagger from './swagger';

export default {
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
