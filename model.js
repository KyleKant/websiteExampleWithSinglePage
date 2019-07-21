var app = angular.module('myApp', ['ngMaterial', 'ngRoute']);
app.config(function ($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider
	.when('/', {
		templateUrl: 'general/content_index.html'
	})
	.when('/contact', {
		templateUrl: 'general/content_contact.html'
	})
	.when('/about', {
		templateUrl:'general/content_about.html',
		controller: 'aboutPageController'
	})
	.when('/post', {
		templateUrl: 'general/content_post.html'
	})
	.otherwise({ redirectTo: '/' })
})

app.controller('aboutPageController',function ($scope, $http) {
	var aboutPageDataURL = "http://localhost/angular_php/index.php/ManagerAbout/getAboutPageData";
	$http.get(aboutPageDataURL).then(function(response){
		console.log(response.data);
		$scope.data = response.data;
	}, function(response){
		console.log(response);
	})
})