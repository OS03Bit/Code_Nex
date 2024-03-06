const express = require('express');
const passport = require('passport');
// const microsoftStrategy = require('passport-microsoft').Strategy;


const router = express.Router();


const homeController = require('../controllers/home_controller');
const userController = require('../controllers/user_controller');


router.get('/login', userController.Login);
router.post('/create-session', passport.authenticate(
    'local',
    { failureRedirect: '/user/login' },
), userController.createSession);

router.get('/dashboard', userController.dashboard);
router.get('/signup', userController.signup);
router.post('/create', userController.create);
router.get('/sign-out', userController.destroySession);

module.exports = router;

