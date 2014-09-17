  KenApp.controller('MainCtrl', ['$scope', function($scope) {
    $scope.alphabet = ['0-9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
      'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
      'Y', 'Z'];
  }]);
  
  //For Log OUT
  KenApp.controller('NavbarCtrl', ['$scope', 'Auth', function($scope, Auth) {
    $scope.logout = function() {
      Auth.logout();
    };
  }]);

  KenApp.controller('LoginCtrl', ['$scope', LoginController]);

function LoginController($scope, Auth){
      alert("LoginController");
   $scope.login= function(){
      alert("Submit Press");
   }
}

var controllers ={};
controllers.SimpleController = function($scope){
   $scope.customers = [
      {name:'Ken', city:'Toronto'},
      {name:'Harvey', city:'New York'},
      {name:'Nguyen', city:'London'}
   ]; 
};
 
KenApp.controller(controllers);
