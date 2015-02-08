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
            $http.get('api/gpa').success(function(gpa) {
                $scope.data = gpa;
            });
        };

        $scope.getGpa();

        $scope.addData = function(){
            if($scope.classField.length >= 1 && $scope.gradeField.length >= 1 && $scope.creditField.length >= 1) {
                $scope.data.push({class: $scope.classField, grade: $scope.gradeField, credits: parseInt($scope.creditField)});
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

        $scope.toNumber = function(letter){
            var gradeNum = 0;
            if(letter == 'A' || letter == 'a'){
                gradeNum = 4;
            }
            else if(letter == 'B' || letter == 'b'){
                gradeNum = 3;
            }
            else if(letter == 'C' || letter == 'c'){
                gradeNum = 2;
            }
            else if(letter == 'D' || letter == 'd'){
                gradeNum = 1;
            }
            else if(letter == 'F' || letter == 'f'){
                gradeNum = 0;
            }
            else{
                alert('INVALID ENTRY')
                return;
            }
            return gradeNum;
        };

        $scope.returnGpa = function (){
            var gradeSum = 0;
            var creditSum = 0;

            for(var i = 0; i < $scope.data.length; i++){
                gradeSum += (Number($scope.toNumber($scope.data[i].grade)) * Number($scope.data[i].credits));
                creditSum += Number($scope.data[i].credits);
                console.log(gradeSum);
                console.log(creditSum);
            }

            var final = gradeSum / creditSum;
            return final;
        }
    });