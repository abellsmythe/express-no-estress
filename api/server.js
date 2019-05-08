"use strict";

// Dependencies
const boxen     = require("boxen");
const chalk     = require("chalk");
const express   = require("express");

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

    const message = `${chalk.cyan.bold('Server')} listening on port: ${chalk.cyan.bold(server.address().port)}`;
    const box = boxen(message, {
        borderColor: "cyan",
        borderStyle: "round",
        margin: 1,
        padding: 1
    });

    console.log(box);
  });

}

startServer();
