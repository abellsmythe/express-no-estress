"use strict";

// Dependencies
const express   = require("express");

// Enviroment
const config    = require("../config");
const routes    = require("./routes");
const loaders   = require("./loaders");

async function startServer() {

  // App
  const app = express();

  // Loaders
  loaders(app);

  // Router
  routes(app);

  // Listener
  const server = app.listen(config.env.port, err => {
    if (err) {
      console.log(err);
      process.exit(1);

      return;
    }

    console.log('################################################');
    console.log(` 🛡️  Server listening on port: ${require("chalk").green(server.address().port)} 🛡️ `);
    console.log('################################################');
  });

}

startServer();
