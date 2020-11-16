const router = require('express').Router();
const authenticate = require('../../middleware/auth');
const {
    login,
    Usersignup,
    getProfile,
    Adminsignup
} = require('./auth.controller');

/* Login, Path: /api/auth/login */
router.post('/login', login);

/* Signup, Path: /api/auth/Usersignup */
router.post('/Usersignup', Usersignup);

/* Signup, Path: /api/auth/Adminsignup */
router.post('/Adminsignup', Adminsignup);
/* Get Profile, Path: /api/auth/getProfile */
router.post('/getProfile', authenticate, getProfile);

/**
 * Export
 */
module.exports = router;