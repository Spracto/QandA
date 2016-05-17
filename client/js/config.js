var blackBelt = angular.module('blackBelt', ['ngRoute']);

blackBelt.config(function ($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'views/partials/login.html',
        controller: 'UsersController'
    })
    .when('/polls',{
        templateUrl: 'views/partials/polls.html',
        controller: 'PollsController'
    })
    .when('/vote/:id',{
        templateUrl: 'views/partials/vote.html',
        controller: 'VotesController'
    })
    .when('/createPoll',{
        templateUrl: 'views/partials/createPoll.html',
        controller: 'PollsController'
    })
})
