lol.controller('LolCtrl', ['$scope', 'playersService', 'championsService', 'playerDataService', function($scope, playersService, championsService, playerDataService) {

  championsService.all()
    .then(function(champions) {
      $scope.champions = champions;
    });
  playersService.all()
    .then(function(players) {
      $scope.players = players;
    });
  playerDataService.getPlayerData();


}]);