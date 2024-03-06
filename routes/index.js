const express = require('express');
const passport = require('passport');
// const microsoftStrategy = require('passport-microsoft').Strategy;


const router = express.Router();


const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);

router.use('/user', require("./user"))
module.exports = router;