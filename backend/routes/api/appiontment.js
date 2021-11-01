const router = require('express').Router();
const verify = require('../../middleware/verify');
const appiontment = require('../controller/appiontment');
const validator = require('../../middleware/validator');

//@route POST /api/appiontment
//@desc add appiontment
//@access private
router.post("/:id", [ verify, validator.appiontment ], appiontment.bookAppiontment);

//@route GET /api/appiontment
//@desc get appiontment by userId
//@access private
router.get("/", [ verify ], appiontment.getAppiontment);

//@route GET /api/appiontment/all
//@desc get all appiontments
//@access private[admin]
router.get("/all", [ verify ], appiontment.getAllAppiontment);


module.exports = router;