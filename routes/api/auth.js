const express = require('express');
const router = express.Router();
const auth = require('../controller/auth');
const validator = require('../../middleware/validator');

//@route POST /api/user/register
//@desc add user or admin 
//@access public
router.post('/register', validator.validateRegister, auth.registerUser);

//@route POST /api/user/login
//@desc login user
//@access public
router.post('/login', validator.validateLogin, auth.loginUser);

module.exports = router;