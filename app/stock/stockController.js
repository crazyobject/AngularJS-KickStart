'use strict';

angular.module('myApp.stock', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/stock', {
    templateUrl: 'stock/stockView.html',
	controller: 'stockCtrl'
  });
}])

.controller('stockCtrl', ["$scope","stockService",function($scope,$stockService) {
	
	var init = function(){
	
		$scope.stockData = [];
		
		getStockData();	
	}
	
	var getStockData = function(){
		
		$stockService.getStockPrice().success(function(response){
			$scope.stockData = response.query.results.quote;
		});
		
	}
	
	
	init();
}]);