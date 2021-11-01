const { body, validationResult } = require('express-validator');

exports.validateRegister = [
    body("name", "name is required").not().isEmpty(),
    body("email", "email is required").isEmail(),
    body("password", "password length cannot be less than 6").isLength({ min: 6 }),

    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty())
        {
            return res.status(400).json(errors.array());
        }
        next();

    }
];

exports.validateLogin = [
    body("email", "email is required").isEmail(),
    body("password", "password length cannot be less than 6").isLength({ min: 6 }),

    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty())
        {
            return res.status(400).json(errors.array());
        }
        next();
    }
];

exports.validateAdvisor = [
    body("name", "name is required").not().isEmpty(),
    body("photo_url", "photo is required").not().isEmpty(),

    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty())
        {
            return res.status(400).json(errors.array());
        }
        next();

    }
];

exports.appiontment = [
    body("time", "time is required").not().isEmpty(),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
        {
            return res.status(400).json(errors.array());
        }
        next();
    }
]