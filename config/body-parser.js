"use strict";

const {
    BODY_PARSER_JSON_LIMIT: jsonLimit = "50mb",
    BODY_PARSER_RAW_LIMIT: rawLimit = "50mb",
    BODY_PARSER_TEXT_LIMIT: textLimit = "50mb",
} = process.env;

const bodyParser = {
    jsonLimit,
    rawLimit,
    textLimit
};

module.exports = bodyParser;