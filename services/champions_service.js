app.factory('championsService', ['$http', function($http) {
  var stub = {};

  stub.all = function () {
    return $http.get("data/champions.json")
      .then(function(response) {
        console.log(response);
        return response.data;
      });
  };
  
  return stub;
}]);