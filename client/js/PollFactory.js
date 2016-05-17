blackBelt.factory('PollFactory', function($http){
  var factory = {};
  var Polls = [];
  var pollById = [];
  

  factory.index = function(callback){
    $http.get('/polls').success(function(response){
      // console.log(response)
      Polls = response;
      callback(Polls)
    })
  }

  factory.create = function(poll, callback){
    console.log('poll factory create', poll)
    $http.post('/createPoll', poll).success(function(pollResponse){
      console.log("response is ", pollResponse)
      Polls.push(pollResponse)
      callback(Polls)
    })
  }

  factory.getPollById = function(pollId, callback){
    // console.log('factory pollid is', pollId)
    $http.get('/getPollById/'+ pollId).success(function(poll){
      // console.log("getPollById in poll factory response is", poll)
      pollById = poll;
      callback(pollById)
    })
  }

  factory.vote = function(data, callback){
    console.log('in factory with this data', data)
    $http.post('/vote', data).success(function(voteResponse){
      console.log("voteResponse is ", voteResponse)
      callback(voteResponse)
    })
  }

  return factory
})
