QandA.controller('UsersController',
  function($scope, UserFactory, $location, $rootScope){
    $scope.users = [];


    $scope.login = function(User){
      UserFactory.create(User, function(users){
        $scope.users = users
        $location.path('/home')
      })
    }

    $scope.logout = function(){
      $rootScope.userId = null;
      UserFactory.clearSession();
      $location.path('/')
    }
  });
