import mongoose from 'mongoose'

var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

let Todo = new Schema({
    id:ObjectId,
    title:String,
    text:String,
    isCompleted:Boolean
});

let TodoModel = mongoose.model('Todo',Todo)

module.exports = {TodoModel:TodoModel}

