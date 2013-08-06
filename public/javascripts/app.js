angular.module('myApp', [])
.config(function ($routeProvider) {
  $routeProvider.when('/list', {
    templateUrl: '/list.html',
    controller: 'listController'
  })
  .when('/add', {
    templateUrl: '/add.html',
    controller: 'addController'
  });
  $routeProvider.otherwise({ redirectTo: '/list' });
})
.run(function ($http, $log) {
  $http.get('/todo')
    .success(function (data, status, headers, config) {
      $log.info(data);
    });
})
.controller('listController', function ($scope) {

})
.controller('addController', ['$scope', '$http', function ($scope, $http) {

}]);
