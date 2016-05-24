var QandA = angular.module('QandA', ['ngRoute']);

QandA.config(function ($routeProvider){
    $routeProvider
    .when('/',{
      templateUrl: 'views/partials/login.html',
      controller: 'UsersController'
    })
    .when('/home',{
      templateUrl: 'views/partials/home.html',
      controller: 'HomeCtrl'
    })
    .when('/question/:id',{
      templateUrl: 'views/partials/question.html',
      controller: 'displayCtrl'
    })
    .when('/create',{
      templateUrl: 'views/partials/create.html',
      controller: 'QuestionCtrl'
    })
    .when('/answer/:id',{
      templateUrl: 'views/partials/answer.html',
      controller: 'AnswerCtrl'
    })
});

QandA.run(function($rootScope, $location, $route, UserFactory){
  $rootScope.$on('$routeChangeStart',
    function(){
      UserFactory.getStatus();
    })
});

// QandA.filter('orderObjectBy', function(){
//  return function(input, attribute) {
//     if (!angular.isObject(input)) return input;
//
//     var array = [];
//     for(var objectKey in input) {
//         array.push(input[objectKey]);
//     }
//
//     array.sort(function(a, b){
//         a = parseInt(a[attribute]);
//         b = parseInt(b[attribute]);
//         return a - b;
//     });
//     return array;
//  }
// });

QandA.filter('sort', function(a, b){
  return a.likes - b.likes
})

QandA.filter('orderObjectBy', function() {
  return function(items, field, reverse) {
    var filtered = [];
    angular.forEach(items, function(item) {
      filtered.push(item);
    });
    filtered.sort(function (a, b) {
      return (a[field] > b[field] ? 1 : -1);
    });
    if(reverse) filtered.reverse();
    return filtered;
  };
});


// // QandA.filter('orderByLikes', function(){
// //
// //   }
// })
