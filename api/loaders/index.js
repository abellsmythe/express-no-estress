"use strict";

// Dependencies
const cors          = require("cors");
const helmet        = require("helmet");
const bodyParser    = require("body-parser");
const cookieParser  = require("cookie-parser");
const hpp           = require("hpp");

const services = {};
const normalizedPath = require("path").join(__dirname, "./");

require("fs").readdirSync(normalizedPath).forEach(function(file) {
    const splitFileName = file.split('.');
    const fileName      = splitFileName[0];

    if (fileName !== 'index') {
        services[fileName] = require(`./${fileName}`);
    }
});

module.exports = (app) => {
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

    Object.entries(services).forEach(([name, service]) => {
        service(app);
    });
};
