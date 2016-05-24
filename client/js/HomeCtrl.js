QandA.controller('HomeCtrl',
  function($scope, UserFactory, QuestionFactory, $location, $rootScope){
    $scope.users = [];
    $scope.user = [];
    $scope.questions = [];
    $scope.answers = [];

    QuestionFactory.index(function(questions){
      // console.log(questions)
      $scope.questions = questions
      console.log('am i here???')
    });

    QuestionFactory.getAnswersHome(function(data){
      console.log("what's happend",data);
      $scope.answers = data;
    })
    // QuestionFactory.getAnswersHome(function(response){
    //   console.log(response)
    // })

    UserFactory.index(function(users){
      // console.log("is this happening?",users)
      $scope.users = users;
      for(var i=users.length-1; i>=0; i--){
        if($rootScope.userId == users[i]._id){
          $scope.user = users[i];
        }
      }
    })

    $scope.addItem = function(){
      // console.log("The quick brown fox jumps over the lazy dog.",$scope.item);
      $scope.item.createdAt = moment();
      $scope.item._user = $rootScope.userId;
      QuestionFactory.create($scope.item, function(Response){
        $scope.list.push(Response)
        $scope.item = {};
    });
  }

  $scope.logout = function(){
    $rootScope.userId = null;
    UserFactory.clearSession();
    $location.path('/')
  }
    // UserFactory.getUserById(function(user){
    //   $scope.user = user
    // })


  });
