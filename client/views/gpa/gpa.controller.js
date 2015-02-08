/**
 * Created by senxx041 on 2/8/15.
 */

'use strict';

angular.module('appModule')
    .controller('gpaCtrl', function($scope, $http){

        $scope.classField = "";
        $scope.gradeField = "";
        $scope.creditField = "";

        // Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
        $scope.data = [];

        $scope.getGpa = function(){
            console.log($scope.data);
            $http.get('api/gpa').success(function(gpa) {
                $scope.data = gpa;
            });
            console.log($scope.data);
        };

        $scope.getGpa();

        $scope.addData = function(){
            if($scope.classField.length >= 1 && $scope.gradeField.length >= 1 && $scope.creditField.length >= 1) {
                //$scope.data.push({class: $scope.classField, grade: $scope.gradeField, credits: parseInt($scope.creditField)});
                $http.post('api/gpa', {class: $scope.classField, grade: $scope.gradeField, credits: parseInt($scope.creditField)}).success(function(){
                    $scope.getGpa();
                });
                $scope.classField = "";
                $scope.gradeField = "";
                $scope.creditField = "";
            }
        };

        $scope.removeData = function(index){
            $http.delete('/api/gpa/' + $scope.data[index]._id).success(function(){
                $scope.getGpa();
                console.log("You just deleted an element at index: " + index);
            });
        };

        $scope.cat = function(str1, str2){
            return str1 + str2;
        };

        $scope.itemsInList = function(){
            return $scope.data.length;
        };

        $scope.toNumber = function(){

        };
    });