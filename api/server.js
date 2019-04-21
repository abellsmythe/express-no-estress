"use strict";

// Dependencies
const express       = require("express");

// App
const app = express();

// Enviroment
const config    = require("../config");
const routes    = require("./routes");
const laoders  = require("./laoders");

// Middlewares


// Loaders
laoders(app);

// Router
routes(app);

// Listener
const server = app.listen(config.env.port, () => {
  console.log(`We are live on port ${require("chalk").green(server.address().port)}`);
});
