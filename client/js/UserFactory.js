QandA.factory('UserFactory', function($http, $rootScope, $location){
  var factory = {};
  var Users = [];

  factory.index = function(callback){
    $http.get('/users').success(function(userData){
      Users = userData;
      // console.log('userData in factory is', userData)
      callback(Users)
    })
  }

  factory.create = function(User, callback){
    // console.log('getting to factory', User)
    $http.post('/createUser', User).success(function(newUser){
      // console.log("new User data is", newUser._id)
      $rootScope.userId = newUser._id;
      $http.post('/setSession', {_id:newUser._id});
      // console.log("the user id in rootScope is ",$rootScope.userId)
      Users.push(newUser)
      callback(Users)
    })
  }

  factory.getStatus = function(){
    $http.get('/status').success(function(user){
      // console.log('dude bro man', user);
      if(user.status == false){
        // console.log('in the get status function', user)
        $location.path('/');
      } else {
        $rootScope.userId = user.userId
        // $location.path('/home')
      }
    })
  }

  factory.clearSession = function(){
    $http.get('/clearSession');
  }

  // factory.getUserById = function(){
  //   $http.get('/userById', )
  // }
  return factory
})
