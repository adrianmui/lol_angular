lol.factory('playersService', ['$http', function($http) {
  var stub = {};

  var _players = {
    "0" : {
      team: "AHQ",
      username: "ahqwestd00r",
      game_id: 81199111
    },

    "1" : {
      team: "EDG",
      username: "TP FROM S5",
      game_id: 81199116
    },

    "2" : {
      team: "AHQ",
      username: "7pTW2r4aUr2T",
      game_id: 81199110
    },

    "3" : {
      team: "EDG",
      username: "ssss3332222",
      game_id: 81199115
    },
  };

  stub.all = function () {
    return $http.get("data/players.json")
      .then(function(response) {
        console.log(response);
        return response.data;
      });
  };
  
  return stub;
}]);