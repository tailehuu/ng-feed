'use strict';

/**
 * @ngdoc function
 * @name ngFeedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngFeedApp
 */
angular.module('ngFeedApp')
    .controller('MainCtrl', ['$scope', 'configuration', function ($scope, configuration) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.foo = configuration.foo;
    }]);
