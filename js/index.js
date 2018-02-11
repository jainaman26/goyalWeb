var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl : "templates/page1.html"
    })
    .when("/story2", {
        templateUrl : "templates/page2.html"
    })
    .when("/story3", {
        templateUrl : "templates/page3.html"
    })
    .when("/story4", {
        templateUrl : "templates/page4.html"
    })
    .otherwise({
        redirectTo: '/home'
    });
});
app.controller('myCtrl', function($scope, $location) {
     $location.path('/home'); 
    $scope.redirectToPage2 = function(){
       $location.path('/story2');
    }
    $scope.redirectToPage3 = function(){
       $location.path('/story3'); 
    }
    $scope.redirectToPage4 = function(){
       $location.path('/story4'); 
    }
    $scope.redirectToPage5 = function(){
       $location.path('/story5'); 
    }
});
