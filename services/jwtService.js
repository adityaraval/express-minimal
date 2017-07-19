var jwt = require('jsonwebtoken');

let jwt_config = {
    secret:"fvdfskvdxzjcdnzjclaswdsncveisfxcmvs",
    expiresIn: 60 * 60,
    algorithm: 'RS256'    
}

let encodeToken = function(payload,callback){
    jwt.sign({payload:payload},jwt_config.secret,{expiresIn:jwt_config.expiresIn},function(err,token){
            if(err){
                callback("SOMETHING WENT WRONG WHILE GENERATING TOKEN")
            }
            if(token){
                callback(null,token);
            }
    });
}

let decodeToken = function(token,callback){
    jwt.verify(token,jwt_config.secret,function(err,decoded){
            if(err){
                callback("SOMETHING WENT WRONG WHILE DECODING TOKEN")
            }
            if(decoded){
                callback(null,decoded);
            }
    });
}


module.exports = {encodeToken:encodeToken,decodeToken:decodeToken}


/**
 * EXAMPLE USAGE
 */

 /**
 * INCLUDE SERVICES
 */

/*
 import {decodeToken,encodeToken} from '../services/jwtService';

encodeToken({id:1},function(err,token){
  if(err){return err}
  if(token){
    console.log("TOKEN SIGNED")
    decodeToken(token,function(err,decoded){
      if(err){return err}
      if(decoded){
        console.log("TOKEN DECODED")
      }
    });
  }
});

*/