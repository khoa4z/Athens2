KenApp.controller('SignupCtrl', ['$scope', RegisterController]);

function RegisterController($scope, Auth){
   //alert("Start RegisterController");
   $scope.signup= function(){
      alert("Submit Press");
   }
   /*$scope.signup = function() {
      Auth.signup({
        email: $scope.email,
        password: $scope.password
      });
    };*/
   //alert("End RegisterController");
}