'use strict';

const {
    BODY_PARSER_JSON_LIMIT: jsonLimit = '50mb',
    BODY_PARSER_RAW_LIMIT: rawLimit = '50mb',
    BODY_PARSER_TEXT_LIMIT: textLimit = '50mb',
} = process.env;

export interface BodyParser {
    jsonLimit: string;
    rawLimit: string;
    textLimit: string;
}

const bodyParser: BodyParser = {
    jsonLimit,
    rawLimit,
    textLimit,
};

export default bodyParser;
