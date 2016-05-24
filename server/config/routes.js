var express = require('express');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session')
var mongoose = require('mongoose');
var Users = require('../controllers/Users.js')
var Questions = require('../controllers/Questions.js')
var Answers = require('../controllers/Answers.js')

// var isLoggedIn;

module.exports = function(app) {
  app.post('/createUser', function(req, res){
    Users.create(req, res);
  });
  app.get('/users', function(req, res){
    Users.index(req, res)
  });
  app.post('/addQuestion', function(req, res){
    Questions.addQuestion(req, res)
  });
  app.get('/questions', function(req, res){
    Questions.index(req, res)
  });
  app.get('/status', function(req, res){
    if(req.session.userId != null){
      res.json({userId: req.session.userId})
    } else {
      res.json({status: false})
    }
  });
  app.post('/setSession', function(req, res){
    console.log("what it do", req.body._id);
    req.session.userId = req.body._id;
  });
  app.get('/clearSession', function(req, res){
    console.log("clear session:", req.session.userId);
    req.session.userId = null;
    console.log('cleared session?', req.session.userId)
    res.json({status: false})
  })
  app.get('/questionById/:id', function(req, res){
    console.log('quesiton by id', req.params)
    Questions.getQuestionById(req, res)
  })
  app.post('/addAnswer', function(req, res){
    Answers.addAnswer(req, res)
  })
  app.get('/getAnswers', function(req, res){
    Answers.index(req, res)
  })
  // app.get('/answers', function(req, res){
  //   Answers.
  // })
  app.post('/likeAnswer', function(req, res){
    console.log("did i make it?",req.body)
    Answers.like(req, res)
  })
}
