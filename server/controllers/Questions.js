var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var moment = require('moment');

module.exports = {
  index: function(req, res){
    Question.find({}, function(err, questions){
      if(err){
        console.log("error getting users", err)
      } else {
        res.json(questions)
      }
    })
  },
  addQuestion: function(req, res){
    console.log("crazy brown fox", req.body)
    var newQuestion = new Question({
      _user:req.body._user,
      question: req.body.question,
      description: req.body.description,
      createdAt: req.body.createdAt
    });
    newQuestion.save(function(err, question){
      if(err){
        console.log("error creating", err)
      } else {
        console.log("success creating item");
        res.json(question)
      }
    })
  },
  getQuestionById: function(req, res){
    console.log("controller questions", req.params)
    Question.findOne({_id: req.params.id})
    .populate('answers')
    .exec(function(err, question){
      console.log(question)
      res.json(question)
    })
  }
}
