'use strict';

// Dependencies
import { body } from 'express-validator/check';

const userValidations = {
    create: [
        body('description', 'description doesn\'t exists').exists().isString().trim().escape(),
    ],
    update: [
        body('description', 'description doesn\'t exists').exists().isString().trim().escape(),
    ],
    delete: [
        body('description', 'description doesn\'t exists').exists().isString().trim().escape(),
    ],
};

export default userValidations;
