
let MyController = function ($scope) {
  
  // $scope.person = {
  //  name: "Tim",     
  //  age: 31
  // };

  $scope.taskList =[];

  // $scope.text ='Hello again from mycontroller.js';

  //   $scope.addTask = function(x) {
  //     console.log(x);
  // }
  // or: 
  // $scope.addTask = function(task) {
  //   console.log(task.taskName, task.dueDate);
  // }
  function Task (obj) {
    this.name= obj.taskName;
    this.due= obj.dueDate;
  }

  $scope.addTask =function (task) {
    let x= new Task (task);

  $scope.taskList.push(x);

  };
};

MyController.$inject =['$scope'];

export default MyController;

