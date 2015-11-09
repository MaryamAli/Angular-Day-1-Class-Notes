import angular from 'angular';

//Controllers
import MyController from './controllers/mycontroller';
// console.log(angular.version.full);
// angular is called in LOWERCASE.

//Creating a Module: Takes 2 properties, 1st: name, 
// 2nd: array of names of module injected into 1st module
// angular.module('taco', []);

//Referencing a Module:
// angular.module('taco');

//remove semicolon and attach to end of
// what starts on line 20 b/c chainable
angular.module("taco", [])

// Angular is chainable, so instead of writing:
// anguler.module('taco').controller();
// Just write: and lose the semicolon above on line 13
//Some Controllers 
//basic controller = .controller(); place name on 
// index file element
// .controller("MyController", function($scope) {

  //$scope goes back to {{coolText on index.html}}
  // $scope.coolText = "Hi from my controller";
  // $scope.person ={
  //   name: "Tim",
  //   age: 31
  // };

//For debugging, remove colon and add to console.log
  // console.log($scope);

// });

// .controller("MyController", ['$scope', '$http',

//   function($scope, $http) {

//     // $scope.coolText = "Hi from my controller";
//      $scope.person = {
//      name: "Tim",
//      age: 31
//     };

//   }
// ]);

.controller('MyController', MyController);
