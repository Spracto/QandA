var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
  name: String,
  questions: [{type: Schema.Types.ObjectId, ref: 'List'}]
});

var User = mongoose.model('User', UserSchema);
