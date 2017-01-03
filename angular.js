var app = angular.module('adminPanel', []);

app.controller('usersController', function($scope, $http) {
     var root = 'http://samp.newclan.com.uy/api';

$http.get(root + "/users")
    .then(function (response) {
    $scope.names = response.data;
    });

});

app.controller('adminsController', function($scope, $http) {
	var root = 'http://samp.newclan.com.uy/api';
$http.get(root + "/admins")
    .then(function (response) {
    $scope.admins = response.data;
    });
});

app.controller('socialController', function($scope, $http) {
	var root = 'https://graph.facebook.com/newclanrp?access_token=EAACEdEose0cBAPXWS4OnOkZALIgm3LukReHF67q53C75ca2leVU2dEZAH7oR3Xx5kvnVgHgZAWLpTdZA2NRZBoIxjzUi7GfgW7ZCRJm5dmUy9r7SSPe1UYbgEFLKBrX663eKgmMyuIby09eZBpPaIvKhXsIzmjtWTcypxEYKAGebgZDZD&fields=name,likes';
$http.get(root)
    .then(function (response) {
    $scope.likes = response.data;
    });
});

