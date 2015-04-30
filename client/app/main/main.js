'use strict';

angular.module('egoGraphApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('visual', {
        url:'/getVisual',
        templateUrl: 'app/visual/visual.html',
        controller: 'VisualCtrl'
      })
  });
