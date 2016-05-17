var mongoose = require('mongoose');
var Users = require('../controllers/Users.js')
var Polls = require('../controllers/Polls.js')

module.exports = function(app) {
  app.post('/createUser', function(req, res){
    Users.create(req, res)
  });
  app.post('/createPoll', function(req, res){
    Polls.create(req, res)
  });
  app.get('/polls', function(req, res){
    Polls.index(req, res)
  });
  app.get('/users', function(req, res){
    Users.index(req, res)
  })
  app.get('/getPollById/:id', function(req, res){
    // console.log("id made it?", req.params.id)
    Polls.getPollById(req, res)
  })
  app.post('/vote', function(req, res){
    console.log('vote function in routes', req.body)
    Polls.vote(req, res)
  })

}
