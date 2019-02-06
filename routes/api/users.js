const express = require('express');
const router = express.Router(); 

//Test Users Route
//Public
router.get('/test', (req,res)=> res.json({
    msg:"Users Works"
}));

module.exports= router;