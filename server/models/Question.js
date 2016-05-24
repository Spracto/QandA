var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var QuestionSchema = new mongoose.Schema({
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  question: String,
  description: String,
  answers: [{type: Schema.Types.ObjectId, ref: 'Question'}],
  createdAt: String
})

var Question = mongoose.model('Question', QuestionSchema);
