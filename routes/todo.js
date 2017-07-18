import express from 'express';
let router = express.Router()

import {TodoModel} from '../models/todo';

router.post('/add',function(req,res){
    let Todo = new TodoModel({
        title:req.body.title,
        text:req.body.text,
        isCompleted:req.body.isCompleted
    });

    Todo.save().then(function(todo){
        res.Ok("","",todo,"");
    },function(err){
        console.log(err)
        res.ServerError();
    });
});

module.exports = {todoRoute:router}
