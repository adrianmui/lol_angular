app.controller('LolCtrl', 
  ['$scope', 
  'playersService', 
  'championsService', 
  'playerDataService', 
  '$stateParams',
  function($scope, playersService, championsService, playerDataService, $stateParams) {

  $scope.leagueId = $stateParams;
  console.log($scope.leagueId);

  championsService.all()
    .then(function(champions) {
      $scope.champions = champions;
    });
  playersService.all()
    .then(function(players) {
      $scope.players = players;
    });

    
  // playerDataService.getPlayerData();


}]);