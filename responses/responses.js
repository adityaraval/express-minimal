import express from 'express';
let router = express.Router()

router.use(function(req, res, next) {
    res.Ok = function(code,message,data,status_code) {
         let object = {
            code:code || "OK",
            message:message || "Operation Executed Successfully!",
            data:data || [],
            status_code:status_code || 200
        }
        return res.json(object)
    };
    next();
});

router.use(function(req, res, next) {
    res.ServerError = function(code,message,data,status_code) {
         let object = {
            code:code || "E_INTERNAL_SERVER_ERROR",
            message:message || "Something Went Wrong On Server!",
            data:data || [],
            status_code:status_code || 500
        }
        return res.json(object)
    };
    next();
});


module.exports = {response:router}