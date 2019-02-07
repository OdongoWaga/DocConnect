const express = require('express');
const router = express.Router(); 
const User = require('../../models/User');
const gravatar = require('gravatar');
const bcrypt= require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
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
            const avatar= gravatar.url(req.body.email,{
                s:'200', //Size
                r: 'pg', //Rating
                d:'mm' //Default
            });

            const newUser= new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                avatar
            });

            bcrypt.genSalt(10, (err,salt)=> {
                bcrypt.hash(newUser.password, salt, (err,hash)=> {
                    if(err) throw err;
                    newUser.password =hash;
                    newUser.save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err)); 
                })
            })
        }
    }) 
});


router.post('/login', (req,res)=> {
    const email = req.body.email;
    const password = req.body.password;

    //Find user by email

    User.findOne({email})
    .then(user => {
        //check user

        if(!user) {
           return  res.status(404).json({email: 'User not found'}); 
        }

        //Check Password

        bcrypt.compare(password, user.password)
        .then(isMatch => {
            if(isMatch){
                //User Matched

        const payload = {id:user.id, name: user.name, avatar: user.avatar }// Creating the JWT payload

                //Sign Token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    { expiresIn: 3600 },
                    (err, token) => {
                      res.json({
                        success: true,
                        token: 'Bearer ' + token
                      });
                    }
                  );
                } else {
                  errors.password = 'Password incorrect';
                  return res.status(400).json(errors);
                }
        })    
    });

});

//@route GET api/users/current 
//Login Users and Return Token
//Private
router.get(
    '/current',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
      });
    }
  );



module.exports= router;