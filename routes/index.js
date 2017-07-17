import express from 'express';
let router = express.Router()

router.get('/hello',function(req,res){
    console.log("GET INDEX")
});

router.get('/testok',function(req,res){
    console.log("GET INDEX")
    res.Ok();
});

router.get('/testerror',function(req,res){
    console.log("GET INDEX")
    res.ServerError();
});


module.exports = {indexRoute:router}
