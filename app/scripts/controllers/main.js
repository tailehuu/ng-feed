'use strict';

/**
 * @ngdoc function
 * @name ngFeedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngFeedApp
 */
angular.module('ngFeedApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
