'use strict';

angular.module('myApp.weather', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/weather', {
    templateUrl: 'weather/weatherView.html',
    controller: 'weatherCtrl'
  });
}])

.controller('weatherCtrl', ["$scope","weatherService",function($scope,weatherService) {
	
	$scope.init = function(){
		$scope.forecastList = [];
		$scope.nameFilter = null;
		$scope.countryZip = 10001; // new york
		
		$scope.getData();
	}
	
	$scope.getData = function(){
		
		weatherService.getForecast($scope.countryZip).success(function(response){
			$scope.forecastList = response.query.results.channel.item.forecast;
			$scope.city         = response.query.results.channel.location.city;
			$scope.country      = response.query.results.channel.location.country;
		});
	}
	
	$scope.getForecastFromZip = function(){
		$scope.getData();
	}
	
    $scope.init();
	
}]);