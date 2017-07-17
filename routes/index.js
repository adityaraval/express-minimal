import express from 'express';
let router = express.Router()

router.get('/hello',function(req,res){
    console.log("GET INDEX")
});

router.get('/testok',function(req,res){
    console.log("TEST OK")
    res.Ok();
});

router.get('/testerror',function(req,res){
    console.log("TEST ERROR")
    res.ServerError();
});


module.exports = {indexRoute:router}
