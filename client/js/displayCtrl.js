QandA.controller('displayCtrl',
  function($scope, UserFactory, QuestionFactory, $location, $rootScope, $routeParams){
    // $scope.question = [];
    $scope.displayQuestion = [];
    $scope.displayAnswers = [];

    QuestionFactory.getQuestionById($routeParams.id, function(response){
      $scope.displayQuestion = response
    })

    QuestionFactory.getAnswers($routeParams.id, function(response){
      for(var i=response.length-1; i>=0; i--){
        // console.log("am i RIGHT HERE??",response)
        if(response[i]._question == $routeParams.id){
          $scope.displayAnswers.push(response[i])
        }
      }
      $scope.displayAnswers.sort(function(a,b){
        return a.likes - b.likes
      })
      console.log("the likes are",$scope.displayAnswers[0].likes)
    })

    UserFactory.index(function(data){
      // console.log("users are",data)
      for(var i=data.length-1; i>=0; i--){
        for(var k=$scope.displayAnswers.length-1; k>=0; k--){
          if(data[i]._id == $scope.displayAnswers[k]._user){
            $scope.displayAnswers[k].username = data[i].name;
          }
        }
      }
    })

    // $scope.getCount = function(items){
    //
    // }

    $scope.like = function(answer){
      console.log(answer)
      QuestionFactory.like(answer, function(response){
        answer.likes = response.likes;
        console.log(response)
      })
    }

    $scope.logout = function(){
      $rootScope.userId = null;
      UserFactory.clearSession();
      $location.path('/')
    }

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

    $scope.getQuestionById = function(question){

    }
  });


  // $scope.addQuestion = function(question){
  //   console.log(question.question.length)
  //   $scope.errors = !$scope.errors
  //   if(question.question.length < 10){
  //     $scope.errors = "Too short!";
  //   } else {
  //     question._user = $rootScope.userId;
  //     QuestionFactory.create(question, function(response){
  //       console.log('question created?')
  //       $location.path('/home');
  //     })
  //   }
  // }
