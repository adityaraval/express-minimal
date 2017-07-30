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

router.use(function(req, res, next) {
    res.NotFound = function(code,message,data,status_code) {
         let object = {
            code:code || "NOT_FOUND",
            message:message || "No Records Found!",
            data:data || [],
            status_code:status_code || 404
        }
        return res.json(object)
    };
    next();
});

router.use(function(req, res, next) {
    res.BadRequest = function(code,message,data,status_code) {
         let object = {
            code:code || "BAD_REQUEST",
            message:message || "Something Bad Happened!",
            data:data || [],
            status_code:status_code || 400
        }
        return res.json(object)
    };
    next();
});

router.use(function(req, res, next) {
    res.UnAuthenticated = function(code,message,data,status_code) {
         let object = {
            code:code || "UNAUTHENTCATED_REQUEST",
            message:message || "You Are Not Authorized To Perform This Operation!",
            data:data || [],
            status_code:status_code || 401
        }
        return res.json(object)
    };
    next();
});

module.exports = {response:router}