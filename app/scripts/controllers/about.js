'use strict';

/**
 * @ngdoc function
 * @name ngFeedApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngFeedApp
 */
angular.module('ngFeedApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
