const express = require('express');
const router = express.Router();
const advisor = require('../controller/advisor');
const verify = require('../../middleware/verify')
const validator = require('../../middleware/validator');

//@route POST /api/advisor
//@desc add/create advisor
//@access private
router.post('/', [ verify, validator.validateAdvisor ], advisor.addAdvisor);

//@route GET /api/advisor
//@desc get all advisors
//@access private
router.get('/', [ verify ], advisor.getAdvisor);


module.exports = router;