"use strict";

// Dependencies
const express  = require("express");

// Controller
const { UserController }  = require("../controllers");

// Validations
const { UserValidations } = require("../validations");

// Router
const UserRouter = express.Router();

    // Create User
    UserRouter.post('/', UserValidations.create, UserController.create);
    // Read All Users
    UserRouter.get('/search/:search?', UserController.readAll);
    // Read User
    UserRouter.get('/:id', UserController.read);
    // Update User
    UserRouter.put('/:id', UserValidations.update, UserController.update);
    // Delete User
    UserRouter.delete('/:id', UserValidations.delete, UserController.delete);

module.exports = UserRouter;
