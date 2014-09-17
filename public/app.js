var KenApp = angular.module('KenApp', [ 'ngMessages', 'ngRoute'])
.config(function($routeProvider) {
   $routeProvider
   .when('/', {
     templateUrl: 'views/login.html',
     controller: 'LoginCtrl'
   })
   .when('/login',{
     templateUrl: 'views/login.html',
     controller: 'LoginCtrl'
   })
      // .when('/signup',{
     // templateUrl: 'views/signup.html'
   // })
   .when('/register',{
     templateUrl: 'views/register.html',
     controller: 'SignupCtrl'
   })
   .when('/template',{
     templateUrl: 'views/home.html',
     controller: 'MainCtrl'
   })
   .when('/home',{
     redirectTo:'/template'
   })
   .otherwise({
     redirectTo: '/login'
   });
});



/*KenApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
   $locationProvider.html5Mode(true);
   $routeProvider
   .when('/', {
     templateUrl: 'views/login.html',
     controller: ''
   })
   .when('/login',{
     templateUrl: 'views/login.html',
     controller: ''
   })
   .when('/register',{
     templateUrl: 'views/register.html',
     controller: ''
   })
   .when('/template',{
     templateUrl: 'views/home.html',
     controller: ''
   })
   .otherwise({
     redirectTo: '/login'
   });
}]);
*/