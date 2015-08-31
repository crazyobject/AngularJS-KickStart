'use strict';

angular.module('myApp.stock.stockService', [])
.service('stockService', function($http){
	
	var API = {};
	
	API.getStockPrice = function(){
		return $http({
			method: 'GET', 
			url: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20%20%28%22YHOO%22%2C%22AAPL%22%2C%22GOOG%22%2C%22MSFT%22%29&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json'
		  });
	}
	
	return API;
});