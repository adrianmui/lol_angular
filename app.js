var app = angular.module('lol', ['ui.router']);

//lodash
app.factory('_', ['$window', function($window) {
  return $window._;
}]);

//routes
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

  // $urlRouterProvider.otherwise('/league');

  $stateProvider
    .state('league', {
      url: '/league',
      abstract: true,
      template: '<div ui-view></div>'
    })
    // .state('league.index', {
    //   url: '',
    //   templateUrl: 'templates/leagueIndex.html',
    //   controller: 'LolCtrl'
    // })
    .state('league.show', {
      url: '/:leagueId',
      // templateUrl: 'templates/leagueIndex.html',
      views: {
        'teamsPanel' : {
          templateUrl:'templates/teamsPanel.html',
          controller: 'TeamCtrl'
        },
        'panel2' : {
          templateUrl:'templates/panel2.html',
          controller: 'LolCtrl'
        },
        'panel3' : {
          templateUrl:'templates/panel3.html',
          controller: 'LolCtrl'
        }
      }
      
    })
}]);

app.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});