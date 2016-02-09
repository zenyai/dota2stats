angular.module('dota2stats').config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('heroDetails', {
      url: '/hero/:heroID',
      controller: 'heroCtrl as herodata',
      templateUrl: 'client/heroes/templates/hero-details.html'
    });

  $urlRouterProvider.otherwise("/");
});
