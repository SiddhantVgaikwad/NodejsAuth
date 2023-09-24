const jwt = require('jsonwebtoken');
const cookie = require('cookie-parser');
const User = require('../models/User')
const dotenv =require('dotenv');
dotenv.config();

const loginrequired = async (req,res,next) => {
    const token = req.cookies['access-token'];
    if(token){
        const validatetoken = await jwt.verify(token,process.env.JWT_SECRET)
        if(validatetoken){
            res.user = validatetoken.id
            next()
        }
        else{
            console.log('token required');
            res.redirect('/auth/login')
        }
    }
    else{
        console.log('token not found');

        res.redirect('/auth/login')

    }
}


const verifyEmail = async(req,res,next) => {
    try{
        const user = await User.findOne({email:req.body.email})
        if(user.isVerified)
        {
            next();
        }
        else{
            console.log('please check your email to verify your account')
        }
    }
    catch(err)
    {
        console.log(err)
    }

}


module.exports = {
    loginrequired,
    verifyEmail
}