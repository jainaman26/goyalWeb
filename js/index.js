var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl : "templates/page1.html"
    })
    .otherwise({
        redirectTo: '/home'
    });
});
app.controller('myCtrl', function($scope) {
    $scope.redirectToPage2 = function(){
        alert("Hello");
    }
});
