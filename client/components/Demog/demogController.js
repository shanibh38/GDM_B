angular.module('citiesApp')
  .controller('demogController', ['$location', '$scope', '$http', '$rootScope', function ($location, $scope, $http, $rootScope) {
    self = this;
    var serverUrl = 'http://132.72.64.202:3001/';
    $rootScope.userName = "";

    function makeUserName(usernames) {
      var c1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVW";
      var c2 = "0123456789";
      var c3 = "";
      for (let i = 0; i < usernames.length; i++) {
        c3 += usernames[i].userName + " ";
      }

      var u = "";
      for (let i = 0; i < 8; i++) {
        if (i % 2 == 0) {
          u += c2.charAt(Math.random() * c2.length);
        }
        else {
          u += c1.charAt(Math.random() * c1.length);
        }
      }

      while (c3.includes(u)) {
        u = "";
        for (let i = 0; i < 8; i++) {
          if (i % 2 == 0) {
            u += c2.charAt(Math.random() * c2.length);
          }
          else {
            u += c1.charAt(Math.random() * c1.length);
          }
        }
      }
      return u+'B';
    }
    $http.get(serverUrl + "Users/getAllUsersB")
      .then(function (response) {
        $rootScope.userName = makeUserName(response.data);
      }, function (response) {
        console.log("There is no points in the DB..");
      });

    function saveDetails() {
      data = {
        "userName": $rootScope.userName,
        "age": $scope.age,
        "gender": $scope.gender,
        "education": $scope.education
      };

      $http.post(serverUrl + "Users/addDemogB", data)
        .then(function (response) {
        }, function (response) {
        });

    }

    function checkDetails() {
      if ($scope.age > 5 && $scope.age < 121 && $scope.gender !== undefined && $scope.education !== undefined)
        return true;
      else
        return false;

    }

    self.moveDmg = function () {
      if (checkDetails()) {
        saveDetails();
        $location.path('/instructions');
        $location.replace();
      }
      else {
        alert("Please make sure that the age is till 120 , and the gender and eductaion is selected");
      }
    }


  }]);