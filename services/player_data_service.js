app.factory('playerDataService', ['$http', 'playersService', function($http, playersService) {
  var stub = {};

  //https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/81199115/ranked?season=SEASON2016&api_key=7e050cd3-bfb8-41f8-b2fd-de6446fbc65e

  var player_id  = 81199111;

  stub.getPlayerData = function(player) {
    return $http.get("https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/" + player_id + "/ranked?season=SEASON2016" + "&api_key=" +RIOT_API_KEY).then( function(response) {
      console.log(response.data);
      debugger;
    })
  };

  
  return stub;
}]);
