import express from 'express';
let router = express.Router()

import {TodoModel} from '../models/todo';

/**
 * POST TODO
 */
router.post('/',function(req,res){
    let Todo = new TodoModel({
        title:req.body.title,
        text:req.body.text,
        isCompleted:req.body.isCompleted
    });

    Todo.save().then(function(todo){
        res.Ok("","",todo,"");
    },function(err){
        res.ServerError();
    });
});

/**
 * GET ALL TODOS
 */
router.get('/',function(req,res){
TodoModel.find().then((todos)=>{
    res.Ok("","",todos,"");
  },(err)=>{
    res.ServerError();
  });
});

/**
 * GET TODO BY ID
 */
router.get('/:id',function(req,res){
  let id = req.params.id;
  TodoModel.findById(id).then((todo)=>{
        if(todo){
            res.Ok("","",todo,"");
        }else{
            res.NotFound();
        }
    }).catch((err)=>{
        res.BadRequest();
    });
});

/**
 * DELETE TODO BY ID
 */
router.delete('/:id',function(req,res){
    let id = req.params.id;
    TodoModel.findByIdAndRemove(id).then((todo)=>{
      if(todo){
        res.Ok("","",todo,"");
      }
    }).catch((e)=>{
        res.NotFound();
    });
});

/**
 * UPDATE TODO BY ID
 */
router.patch('/:id',function(req,res){
      let id = req.params.id;
      let body = _.pick(req.body,['text','completed']);

      TodoModel.findByIdAndUpdate(id,{$set:body},{new:true}).then((todo)=>{
      if(todo){
        res.Ok("","",todo,"");
      }else{
        res.NotFound();
      }
    }).catch((e)=>{
      res.BadRequest();
    });
});

module.exports = {todoRoute:router}
