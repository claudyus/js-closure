//app.js

angular.module('myApp', [])

.config(function ($routeProvider) {
  $routeProvider.when('/user', {
    templateUrl: 'user.html',
    controller: 'myController'
  });
  $routeProvider.when('/todo', {
    templateUrl:'todo.html',
    controller: 'todoController'
  });
})

.controller('todoController', function ($scope, $log, $http){

  $scope.possibleColors = [
    'green',
    'red',
    'black',
    'cyan',
    'purple'
  ];

  $scope.todoList = [];

  $scope.add = function (todoObj) {
    //magic stuff
    $http.post('/todo', todoObj)
    .success(function () {
      //appendi localmente
      $scope.todoList.push(todoObj);
      $scope.todo = null;
    });
  };

  $scope.del = function (id) {
    $http.delete('/todo/' + id)
    .success(function(){
      //mrgamer hack
      $scope.todoList.splice(id, 1);
    });
  };

  $scope.get = function () {
    $http.get('/todo')
    .success(function (data, statusCode){
        $scope.todoList = data;
    });
  };

  $scope.get();
})

.controller('myController', function ($scope, $log, $http) {
  //my controller here :)
  $scope.reset = function () {
    $log.info('win!');
    $scope.user.name = "pippo";
  }

  $scope.tooMuchData = function () {
    $log.info('call tooMuchData');
    if (($scope.user.name.length) > 25) {
      return true;
    }
    return false;
  };

});
