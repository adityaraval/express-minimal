import express from 'express';
const _ = require('lodash');
let router = express.Router()

import {UserModel} from '../models/user';

import {encodeToken,decodeToken} from '../services/jwtService';

/**
 * POST TODO
 */
router.post('/register',function(req,res){
    let user = new UserModel({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        role:"User"
    });
    user.save().then(function(user){
        res.Ok("","",user,"");
    }).catch(function(err){
        res.ServerError(err);
    })

});

router.post('/login',function(req,res){
  var body = _.pick(req.body,['username','password']);
UserModel.findOne({username:body.username}).then((user)=>{
    if(user){
        user.comparePassword(body.password,function(err,isMatch){
            if(isMatch){
                encodeToken(user,function(err,token){
                    let tokenData = {
                        token:token
                    }
                    res.Ok("","",tokenData);
                });
            }
        });
    }
},(err)=>{
    console.log(err)
});

});


module.exports ={authRoute:router}
