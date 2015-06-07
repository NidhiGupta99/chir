/**
 * Created by user on 03-Jun-15.
 */


describe('controller:authController',function(){


    beforeEach(module('chirpApp'));

    var AuthCtrl,scope,root_scope;
    var authenticate;
    var $httpBackend;

    //Initialiaze the controller and a mock scope

    beforeEach(inject(function($controller,$scope, _$httpBackend_, $rootScope){

        root_scope = $rootScope.$new();
        scope = $scope.$new();
            AuthCtrl = $controller('authController',{$scope:scope,$rootScope:root_scope});




    }));












});
