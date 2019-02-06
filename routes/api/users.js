const express = require('express');
const router = express.Router(); 
const User = require('../../models/User');
const gravatar = require('gravatar')

//Test Users Route
//Public
router.get('/test', (req,res)=> res.json({
    msg:"Users Works"
}));

//@route GET api/users/register
//Registers Users
//Public
router.post('/register', (req, res)=> {
    User.findOne({
        email: req.body.email 
    }).then(user => {
        if(user){
             return res.status(400).json({email: 'Email already Exists'})
        } else{
            const newUser= new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                avatar
            })
        }
    }) 
});

module.exports= router;