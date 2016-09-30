app.controller('TeamCtrl', 
  ['$scope', 
  '$stateParams',
 ,
  function($scope, $stateParams) {

  $scope.leagueId = $stateParams;
  console.log($scope.leagueId);
    
  // playerDataService.getPlayerData();


}]);