var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PollSchema = new mongoose.Schema({
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  question: String,
  option1: {
    description: String,
    votes: Number
  },
  option2: {
    description: String,
    votes: Number
  },
  option3: {
    description: String,
    votes: Number
  },
  option4: {
    description: String,
    votes: Number
  },
  createdAt: String
})

var Poll = mongoose.model('Poll', PollSchema);
