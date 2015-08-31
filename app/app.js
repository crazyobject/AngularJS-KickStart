'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.version',
  'myApp.weather',
  'myApp.weather.weatherService',
  'myApp.stock',
  'myApp.stock.stockService'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/weather'});
}]);