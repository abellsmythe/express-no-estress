"use strict";

// Dependencies
const express       = require("express");
const cors          = require("cors");
const helmet        = require("helmet");
const bodyParser    = require("body-parser");
const cookieParser  = require("cookie-parser");
const hpp           = require("hpp");

// App
const app = express();

// Enviroment
const config    = require("../config");
const routes    = require("./routes");
const services  = require("./services");

// Middlewares
app.use(helmet());
app.use(cors(config.cors));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.raw({limit: '50mb'}));
app.use(bodyParser.text({limit: '50mb'}));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.text());
app.use(cookieParser());
app.use(hpp());

// Services
services(app);

// Router
routes(app);

// Listener
app.listen(config.env.port, () => {
  console.log(`We are live on port ${require("chalk").green(config.env.port)}`);
});
