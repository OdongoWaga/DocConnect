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

//Test Profile Route
//Public
router.get('/test', (req,res)=> res.json({
    msg:"Profile Works"
}));

// POST api/profile
//create /edit users profile
// private
router.post('/', passport.authenticate('jwt', {session:false}), 
(req,res)=> {

    //Get Fields

profileFields.user = req.user.id;
if(req.body.handle) profileFields.handle = req.body.handle;
if(req.body.clinic) profileFields.clinic = req.body.clinic;
if(req.body.website) profileFields.website = req.body.website;
if(req.body.location) profileFields.location = req.body.location;
if(req.body.bio) profileFields.bio = req.body.bio;

//Skills -split into array
if(typeof req.body.skills !== 'undefined'){
    profileFields.skills= req.body.skills.split(',');
}

profileFields.social = {};

if(req.body.facebook) profileFields.social.facebook = req.body.facebook;
if(req.body.twitter) profileFields.social.twitter = req.body.twitter;
if(req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
if(req.body.instagram) profileFields.social.instagram = req.body.instagram;

Profile.findOne({user: req.user.id }).then (profile=> {
    if(profile) {
        //Update

    Profile.findOneAndUpdate(
        {user: req.user.id},
        {$set:profileFields },
        {new: true}
    ).then(profile => res.json(profile));
    } else {
        //Create
    }
})

});

  

module.exports= router;