"use strict";

// Dependencies
const express   = require("express");
const chalk     = require("chalk");

// Enviroment
const config    = require("../config");
const routes    = require("./routes");
const loaders   = require("./loaders");

async function startServer() {

  // App
  const app = express();

  // Loaders
  await loaders(app);

  // Router
  routes(app);

  // Listener
  const server = app.listen(config.env.port, err => {
    if (err) {
      console.log(err);
      process.exit(1);

      return;
    }

    console.log(`\n${chalk.hex('#9000FF').bold('Server')} listening on port: ${chalk.hex('#9000FF').bold(server.address().port)}\n`);
  });

}

startServer();
