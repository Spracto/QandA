QandA.controller('QuestionCtrl',
  function($scope, UserFactory, QuestionFactory, $location, $rootScope){
    // $scope.question = [];
    $scope.displayQuestion = [];

    // QuestionFactory.getQuestionById()

    $scope.addQuestion = function(question){
      console.log(question.question.length)
      $scope.errors = !$scope.errors
      if(question.question.length < 10){
        $scope.errors = "Too short!";
      } else {
        question._user = $rootScope.userId;
        QuestionFactory.create(question, function(response){
          console.log('question created?')
          $location.path('/home');
        })
      }
    }

    $scope.logout = function(){
      $rootScope.userId = null;
      UserFactory.clearSession();
      $location.path('/')
    }

    $scope.cancel = function(){
      $scope.question = {};
    }
  });
