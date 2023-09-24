const express = require('express');
const { loginrequired } = require('../config/JWT');
const router = express.Router();


//home route
router.get('/', (req, res) => {
    res.render('home');
});

//dashboard Route
  // When a GET request is made to '/dashboard', render the 'dash' template
    // Also, pass a 'name' variable to the template, which seems to come from the request body
router.get('/dashboard',(req, res) => res.render('dash', {
    name: req.body.name
}));


module.exports = router;