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
    .when("/story5", {
        templateUrl : "templates/page5.html"
    })
    .when("/story6", {
        templateUrl : "templates/page6.html"
    })
    .when("/story7", {
        templateUrl : "templates/page7.html"
    })
    .when("/story8", {
        templateUrl : "templates/page8.html"
    })
    .when("/story9", {
        templateUrl : "templates/page9.html"
    })
    .otherwise({
        redirectTo: '/home'
    });
});
app.controller('myCtrl', function($scope, $location, $timeout) {
     $location.path('/home');
    $scope.showLoader = false;
    $timeout( function(){
          $scope.showLoader = true;  
    }, 8000 );
    $scope.redirectToPage2 = function(){
        var elem = document.getElementById('audio');
        elem.play();
       $location.path('/story2');
    }
});
app.controller('ctrlSlide1', function($scope, $location, $timeout) {
    $timeout( function(){
             $location.path('/story3');          
        }, 5500 );
});
app.controller('ctrlSlide2', function($scope, $location, $timeout) {
    $timeout( function(){
            $location.path('/story4');
        }, 5500 );
});
app.controller('ctrlSlide3', function($scope, $location, $timeout) {
    $timeout( function(){
            $location.path('/story5');
        }, 5500 );
});
app.controller('ctrlSlide4', function($scope, $location, $timeout) {
    $timeout( function(){
            $location.path('/story6');
        }, 16000 );
});
app.controller('ctrlSlide5', function($scope, $location, $timeout) {
    $timeout( function(){
            $location.path('/story7');
        }, 13000 );
});
app.controller('ctrlSlide6', function($scope, $location, $timeout) {
    $scope.showLoader = false;
    $timeout( function(){
            $scope.showLoader = true;
        }, 10000 );
});
app.controller('ctrlSlide7', function($scope, $location, $timeout) {
     $timeout( function(){
            $location.path('/story8');
        }, 9000 );
});
