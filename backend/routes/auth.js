const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');
const passport = require('passport');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/me', auth, authController.getMe);
router.get('/google', authController.googleAuth);
router.get('/google/callback', authController.googleCallback);

module.exports = router;