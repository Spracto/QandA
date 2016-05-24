var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var moment = require('moment');

module.exports = {
  index: function(req, res){
    Answer.find({}, function(err, answers){
      if(err){
        console.log("error getting answers", err)
      } else {
        res.json(answers)
      }
    })
  },
  addAnswer: function(req, res){
    console.log("stuff i need",req.body)
    var newAnswer = new Answer({
      _user: req.body.userId,
      _question: req.body.questionId,
      answer: req.body.answer,
      description: req.body.description,
      likes: 0
    });
    newAnswer.save(function(err, answer){
      if(err){
        console.log('err', err)
      } else {
        console.log('answer added')
        res.json(answer)
      }
    })
  },
  like: function(req, res){
    console.log("almost there", req.body)
    Answer.findOne({_id: req.body._id}, function(err, answer){
      if(err){
        console.log('err', err)
      } else {
        console.log("YAHHHHHH", answer)
        answer.likes += 1;
        answer.save();
        console.log("the number of likes is:",answer.likes)
        res.json(answer);
      }
    })
  }
}
