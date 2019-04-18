'use strict';

const assert = require("assert");

module.exports = function () {

    this.Given(/^The json request data$/i, function (data) {
        this.requestBody = JSON.parse(data);
    });

    this.When(/^I make a GET request to "(.*)"$/i, function (uri) {
        return this.httpGet(uri);
    });
    
    this.When(/^I make a POST request to "(.*)"$/i, function (uri) {
        return this.httpPost(uri);
    });

    this.When(/^I make a PUT request to "(.*)"$/i, function (uri) {
        return this.httpPut(uri);
    });

    this.When(/^I make a DELETE request to "(.*)"$/i, function (uri) {
        return this.httpDelete(uri);
    });

    this.Then(/^The response should be "(.*)"$/i, function (expectedResponse, callback) {
        assert.equal(this.actualResponse, expectedResponse, `\r\nExpected: ${expectedResponse}\r\nActual: ${this.actualResponse}`);
        callback();
    });

    this.Then(/^The response property "(.*)" should be "(.*)"$/i, function (path, expectedValue, callback) {
        const actualValue = this.getValue(path);
        assert.equal(actualValue, expectedValue, this.prettyPrintError(actualValue, expectedValue));
        callback();
    });

    this.Then(/^The response status code should be "(.*)"$/i, function (expectedValue, callback) {
        assert.equal(this.statusCode, expectedValue, this.prettyPrintError(this.statusCode, expectedValue));
        callback();
    });

};