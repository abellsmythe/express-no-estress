"use strict";

module.exports = (app) => {
    const mongo     = require("./mongo");
    const redis     = require("./redis");
    const limiter   = require("./limiter")(app);
}