App.controller('myControler', function ($scope,$rootScope) {
    // $scope.name = "Sumeta";
    $scope.btnName = function () {
        alert('Hello ' + $scope.name);
    };
    // create person object
    $scope.person = {};
    $rootScope.person = $scope.person;
});

App.controller('indexController', function ($scope) {
    $scope.page = 'index';
});

App.controller('bookController', function ($scope, $http) {
    $http.get('http://localhost:8383/TranAngurajs/mockup/book.json')
            .success(function (data) {
                $scope.books = data.books;
            })
            .error(function (status) {
                alert(status);
            });

    $scope.page = 'book';
//    $http.post('http://localhost:8383/TranAngurajs/mockup/book.json', $scope.page)
//            .success(function (data) {
//                $scope.books = data.books;
//            })
//            .error(function (status) {
//                //alert(status);
//            });

    



//    $scope.books = [
//        {name: 'abc', price: 22},
//        {name: 'ฮฮฮ', price: 0},
//        {name: 'java', price: 34},
//    ];

});