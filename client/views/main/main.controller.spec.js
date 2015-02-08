'use strict';

//=== Testing mainCtrl =============================================
describe('Testing controller: mainCtrl', function(){

    // load the controller's module
    beforeEach(module('appModule'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('mainCtrl', {
            $scope: scope
        });


    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    it('should test addData function', function(){
        scope.textField = 'squirrel';
        scope.weightField = '5';
        scope.addData();
        expect(scope.itemsInList()).toEqual(1);
        expect(scope.data[0].text).toBe('squirrel');
        expect(scope.data[0].weight).toEqual(5);
    })

    it('should test heaviestPet function', function(){
        scope.textField = 'squirrel';
        scope.weightField = '5';
        scope.addData();
        scope.textField = 'cat';
        scope.weightField = '10';
        scope.addData();
        scope.textField = 'snake';
        scope.weightField = '2';
        scope.addData();
        expect(scope.heaviestPet()).toBe('Heaviest: cat, 10');

    })

});
