const express = require('express');
const router = express.Router(); 
const mongoose = require('mongoose');
const passport = require('passport');
//Load Profile
const Profile= require('../../models/Profile');
//Load User
const User= require('../../models/User')

//Test Profile Route
//Public
router.get('/test', (req,res)=> res.json({
    msg:"Profile Works"
}));

// GET api/profile
//get users profile
// private
router.get('/', passport.authenticate('jwt', {session:false}), (req,res)=> {
const errors= {};

Profile.findOne({user: req.user.id})
.then(profile => {
if(!profile){
    errors.noprofile= 'There is no profile for the user';
    return res.status(404).json(errors);
}
res.json(profile);
})
.catch(err => res.status(404).json(err));


});
 
  

module.exports= router;