var mongoose = require('mongoose');
var User = mongoose.model('User');
var moment = require('moment');

module.exports = {
  create: function(req, res){
    var newUser = new User({name: req.body.name})
    newUser.save(function(err, user){
      if(err){
        console.log('something went wrong')
      } else {
        console.log('User saved to DB')
        res.json(user)
      }
    })
  },
  index: function(req, res){
    User.find({}, function(err, users){
      if(err){
        console.log("error getting users", err)
      } else {
        res.json(users)
      }
    })
  }
}
