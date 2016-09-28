lol.factory('playersService', ['$http', function($http) {
  var stub = {};

  

  stub.all = function () {
    return $http.get("data/players.json")
      .then(function(response) {
        console.log(response);
        return response.data;
      });
  };
  
  return stub;
}]);