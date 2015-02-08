/**
 * Created by senxx041 on 2/8/15.
 */

'use strict';

console.log("gpa.js loaded!");

angular.module("appModule")
    .config(function($stateProvider){
        $stateProvider
            .state('gpa', {
                url: '/gpa',
                templateUrl: 'views/gpa/gpa.html',
                controller: 'gpaCtrl'
            });
    });