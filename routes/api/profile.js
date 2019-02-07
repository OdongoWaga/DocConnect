const express = require('express');
const router = express.Router(); 

//Test Profile Route
//Public
router.get('/test', (req,res)=> res.json({
    msg:"Profile Works"
}));


 

module.exports= router;