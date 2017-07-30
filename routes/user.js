import express from 'express';
let router = express.Router();

import {isAuthenticated} from '../middleware/isAuthenticated'

router.get('/profile',isAuthenticated,function(req,res){
    console.log("GET USER")
    res.Ok(",",req.user);
});
module.exports = {userRoute:router}
