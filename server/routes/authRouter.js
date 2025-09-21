const express = require('express');
const router = express.Router();
const {signUp} = require('../controllers/authController');
const {signIn} = require('../controllers/authController');
router.route('/signup').post(signUp);
router.route('/signin').post(signIn);

module.exports = router;