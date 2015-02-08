'use strict';

angular.module("appModule")
    .controller('mainCtrl', function($scope, $http){
        console.log("main controller loaded!");

        $scope.textField = "";
        $scope.weightField = "";

        // Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
        $scope.data = [];

        $scope.getPets = function(){
            $http.get('api/pets').success(function(pets) {
                $scope.data = pets;
            });
        };

        $scope.getPets();

        $scope.addData = function(){
            if($scope.textField.length >= 1 && $scope.weightField.length >= 1) {
                $scope.data.push({text: $scope.textField, weight: parseInt($scope.weightField)});
                $http.post('api/pets', {text: $scope.textField, weight: $scope.weightField}).success(function(){
                    $scope.getPets();
                });
                $scope.textField = "";
                $scope.weightField = "";
            }
        };

        $scope.removeData = function(index){
            $http.delete('/api/pets/' + $scope.data[index]._id).success(function(){
                $scope.getPets();
                console.log("You just deleted an element at index: " + index);
            });
        };

        $scope.cat = function(str1, str2){
            return str1 + str2;
        };

        $scope.itemsInList = function(){
            return $scope.data.length;
        };

        $scope.heaviestPet = function(){
            var heaviest = 0;
            var animal = '';
            for(var i=0; $scope.data.length > i; i++){
                if(parseInt($scope.data[i].weight) > heaviest){
                    heaviest = $scope.data[i].weight;
                    animal = $scope.data[i].text;
                }
            }
            return "Heaviest: " + animal + ", " + heaviest;
        }
    });