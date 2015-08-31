'use strict';

angular.module('myApp.weather.weatherService', []).
factory('weatherService', function($http) {
 var API = {};

    API.getForecast = function(countryZip) {
      return $http({
        method: 'GET', 
        url: 'https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20weather.forecast%20WHERE%20location%3D%22'+countryZip+'%22&format=json&diagnostics=true&callback='
      });
    }

    return API;
  });