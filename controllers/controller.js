lol.controller('LolCtrl', ['$scope', 'playersService', 'championsService', function($scope, playersService, championsService) {

  championsService.all()
    .then(function(champions) {
      $scope.champions = champions;
    });
  playersService.all()
    .then(function(players) {
      $scope.players = players;
    });
  


}]);