var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AnswerSchema = new mongoose.Schema({
  _question: {type: Schema.Types.ObjectId, ref: 'Question'},
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  answer: String,
  description: String,
  likes: Number,
  createdAt: String
})

var Answer = mongoose.model('Answer', AnswerSchema);
