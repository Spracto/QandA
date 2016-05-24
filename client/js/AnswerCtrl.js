QandA.controller('AnswerCtrl',
  function($scope, UserFactory, QuestionFactory, $location, $rootScope, $routeParams){
    // $scope.question = [];
    $scope.displayQuestion = [];

    QuestionFactory.getQuestionById($routeParams.id, function(response){
      $scope.displayQuestion = response
    })

    $scope.addAnswer = function(answer){
      console.log("hog wash", answer.description)
      if(answer.answer.length < 5){
        $scope.errors = !$scope.errors;
      } else {
        console.log($routeParams.id, $rootScope.userId)
        answer.questionId = $routeParams.id;
        answer.userId = $rootScope.userId;
        QuestionFactory.addAnswer(answer, function(){
          $location.path('/home')
        })
      }
      console.log("answer is", answer)
    }

    $scope.cancel = function(){
      $scope.answer = {};
    }
    $scope.logout = function(){
      $rootScope.userId = null;
      UserFactory.clearSession();
      $location.path('/')
    }

  });
