var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');
var moment = require('moment');

module.exports = {
  create: function(req, res){
    console.log("the create poll data is ",req.body)
    var newPoll = new Poll({question: req.body.question,
      _user: req.body._user,
      option1: {description: req.body.option1, votes: 0},
      option2: {description: req.body.option2, votes: 0},
      option3: {description: req.body.option3, votes: 0},
      option4: {description: req.body.option4, votes: 0},
      createdAt: req.body.createdAt})
    newPoll.save(function(err, poll){
      if(err){
        console.log('something went wrong')
      } else {
        console.log('Poll saved to DB')
        res.json(poll)
      }
    });
  },
  index: function(req, res){
    Poll.find({}, function(err, polls){
      if(err){
        console.log("error getting polls", err)
      } else {
        res.json(polls)
      }
    });
  },
  getPollById: function(req, res){
    Poll.findOne({_id: req.params.id}, function(err, poll){
      if(err){
        console.log('error finding poll', err)
      } else {
        console.log('found poll')
        res.json(poll)
      }
    })
  },
  vote: function(req, res){
    console.log("in the polls controller", req.body.pollId)
    // pollToUpdate = Poll.findOne({_id: req.body.pollId});
    // console.log("found poll to update", pollToUpdate._id)
    Poll.findOne(req.body.pollId, function(err, poll){
      if(err){
        console.log('poll not found?', err)
      } else {
        if(poll.option1.description == req.body.option.description){
          poll.option1.votes += 1;
          console.log('vote counted for option 1')
        }
        if(poll.option2.description == req.body.option.description){
          poll.option2.votes += 1;
          console.log('vote counted for options 2!')
        }
        if(poll.option3.description == req.body.option.description){
          poll.option3.votes += 1;
          console.log('vote counted for options 3!')
        }
        if(poll.option4.description == req.body.option.description){
          poll.option4.votes += 1;
          console.log('vote counted for option 4!')
        }
        poll.save()
        res.json(poll)
      }
    })
  }
}
