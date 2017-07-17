import express from 'express';
let router = express.Router()

router.get('/hello',function(req,res){
    console.log("GET INDEX")
});

module.exports = {indexRoute:router}
