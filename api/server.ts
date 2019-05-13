'use strict';

// Dependencies
import boxen from 'boxen';
import chalk from 'chalk';
import * as express from 'express';

// Enviroment
import config from '../config';
import loaders from './loaders';
import routes from './routes';

async function startServer() {

  // App
  const app = express();

  // Loaders
  await loaders(app);

  // Router
  routes(app);

  // Listener
  const { port } = config.env;
  app.listen(port, (err: Error) => {
    if (err) {
      // tslint:disable-next-line no-console
      console.log(err);
      process.exit(1);

      return;
    }

    const message = `${chalk.cyan.bold('Server')} listening on port: ${chalk.cyan.bold(`${port}`)}`;
    const box = boxen(message, {
      borderColor: 'cyan',
      // borderStyle: 'round',
      margin: 1,
      padding: 1,
    });

    // tslint:disable-next-line no-console
    console.log(box);
  });

}

startServer();
