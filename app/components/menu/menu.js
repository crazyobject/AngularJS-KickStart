angular.module('myApp')
.directive("menu",function(){
	return {
		templateUrl:'components/menu/menu.html',
		restrict:'E'
	}
});