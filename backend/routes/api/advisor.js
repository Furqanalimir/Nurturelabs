const express = require('express');
const router = express.Router();
const advisor = require('../controller/advisor');
const verify = require('../../middleware/verify')
const validator = require('../../middleware/validator');

//@route POST /api/admin/advisor
//@desc add/create advisor
//@access private
router.post('/advisor', [ verify, validator.validateAdvisor ], advisor.addAdvisor);

//@route GET /api/admin/advisor
//@desc get all advisors
//@access private
router.get('/advisor', [ verify ], advisor.getAdvisor);


module.exports = router;