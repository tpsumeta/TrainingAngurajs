App.controller('myControler', function ($scope) {
 // $scope.name = "Sumeta";
    $scope.btnName = function (){
        alert('Hello '+$scope.name);
    };
    // create person object
    $scope.person = {};
});

App.controller('indexController',function ($scope){
    $scope.page = 'index';
});

App.controller('bookController',function ($scope,$http){
    
        $scope.page = 'book';
        $scope.books = [
            {name:'abc',price:22},
            {name:'ฮฮฮ',price:0},
            {name:'java',price:34},
             ];
});