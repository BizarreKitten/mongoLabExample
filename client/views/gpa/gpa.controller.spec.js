/**
 * Created by senxx041 on 2/8/15.
 */
'use strict';

//=== Testing gpaCtrl =============================================
describe('Testing controller: gpaCtrl', function(){

    // load the controller's module
    beforeEach(module('appModule'));

    var gpaCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        gpaCtrl = $controller('gpaCtrl', {
            $scope: scope
        });


    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    it('should change letter grades to point values', function(){
        expect(scope.toNumber('A')).toEqual(4);
        expect(scope.toNumber('C')).toEqual(2);
        expect(scope.toNumber('F')).toEqual(0);
    });

    it('should return the gpa', function(){
        scope.classField = 'class uno';
        scope.gradeField = 'A';
        scope.creditField = '5';
        scope.addData();
        scope.classField = 'class dos';
        scope.gradeField = 'B';
        scope.creditField = '5';
        scope.addData();
        expect(scope.returnGpa()).toEqual(3.5);
    });


});
