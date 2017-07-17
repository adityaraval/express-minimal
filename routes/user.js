import express from 'express';
let router = express.Router()

router.get('/get',function(req,res){
    console.log("GET USER")
});

module.exports = {userRoute:router}
