QandA.factory('QuestionFactory', function($http){
  var factory = {};
  var questions = [];
  var loggedInUserList = [];
  var displayQuestion = [];
  var answers = [];

  factory.getQuestionById = function(data, callback){
    // console.log('data is', data)
    $http.get('/questionById/'+ data).success(function(response){
      displayQuestion = response;
      callback(displayQuestion);
    })
  }

  factory.index = function(callback){
    $http.get('/questions').success(function(response){
      // console.log("flying monkeys!", response)
      questions = response;
      callback(questions)
    });
  }

  factory.create = function(item, callback){
    // console.log('question factory create', item);
    $http.post('/addQuestion', item).success(function(response){
      console.log("response is", response);
      loggedInUserList.push(response)
      callback(loggedInUserList)
    });
  }

  factory.addAnswer = function(data, callback){
    // console.log('factory data is', data);
    $http.post('/addAnswer', data).success(function(response){
      // console.log("response is:", response);
      callback(response)
    })
  }

  factory.getAnswers = function(data, callback){
    $http.get('/getAnswers').success(function(response){
      // console.log(response)
      callback(response)
    })
  }

  factory.like = function(data, callback){
    $http.post('/likeAnswer', data).success(function(response){
      callback(response)
    })
  }
  factory.getAnswersHome = function(data, callback){
    $http.get('/getAnswers').success(function(response){
      console.log("crap",response)
      answers = response;
      callback(response);
    })
  }

  return factory;

})
