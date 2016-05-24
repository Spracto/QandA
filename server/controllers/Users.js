var mongoose = require('mongoose');
var User = mongoose.model('User');
var moment = require('moment');

module.exports = {
  index: function(req, res){
    User.find({}, function(err, users){
      if(err){
        console.log("error getting users", err)
      } else {
        res.json(users)
      }
    })
  },
  create: function(req, res){
    var newUser = new User({name: req.body.name})
    newUser.save(function(err, user){
      if(err){
        console.log('something went wrong')
      } else {
        console.log('User saved to DB!!', user._id)
        req.session.userId = user._id
        // console.log("assigned session variable", req.session.userId)
        res.json(user)
      }
    })
  }
  // setSession: function(req, res){
  //   console.log('having to set a session variable back here is a pain', req.body)
  //   req.session.userId = req.body._id;
  //   res.json()
  // },
  // getStatus: function(req, res){
  //   if(req.session.userId){
  //     res.json({status: req.session.userid});
  //   } else {
  //     res.json({status: false})
  //   }
  // }
}
