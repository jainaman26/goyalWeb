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
app.controller('ctrlSlide1', function($scope, $location, $timeout) {
    $timeout( function(){
            $location.path('/story3');
        }, 3000 );
});
app.controller('ctrlSlide2', function($scope, $location, $timeout) {
    $timeout( function(){
            $location.path('/story4');
        }, 5000 );
});
app.controller('ctrlSlide3', function($scope, $location, $timeout) {
    $timeout( function(){
            $location.path('/story5');
        }, 5000 );
});
app.controller('ctrlSlide4', function($scope, $location, $timeout) {
    $timeout( function(){
            $location.path('/story6');
        }, 5000 );
});
app.controller('ctrlSlide5', function($scope, $location, $timeout) {
    $timeout( function(){
            $location.path('/story7');
        }, 5000 );
});
