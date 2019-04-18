"use strict";

// Dependencies
const express  = require("express");

// Controller
const { TestController }  = require("../controllers");

// Router
const TestRouter = express.Router();

    // Create Test
    TestRouter.post('/', TestController.create);
    // Read All Tests
    TestRouter.get('/search/:search?', TestController.readAll);
    // Read Test
    TestRouter.get('/:id', TestController.read);
    // Update Test
    TestRouter.put('/:id', TestController.update);
    // Delete Test
    TestRouter.delete('/:id', TestController.delete);

module.exports = TestRouter;
