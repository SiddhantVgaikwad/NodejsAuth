const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')




//Register Route 
router.get('/register', (req, res) => res.render('register'));
router.post('/register', authController.registerHandle);


//Login 
router.get('/login', (req, res) => res.render('login'));
router.post('/login', authController.loginHandle);

//Forgot Password Route
router.get('/forgot', (req, res) => res.render('forgot'));
router.post('/forgot', authController.forgotPassword);

router.get('/forgot/:token', authController.gotoReset);

//Reset Password Route
router.get('/reset/:id', (req, res) => {res.render('reset', { id: req.params.id })});
router.post('/reset/:id', authController.resetPassword);

//Email ACTIVATE Handle
router.get('/activate/:token', authController.activateHandle);


// Logout GET Handle
router.get('/logout', authController.logoutHandle);

module.exports = router;