$(function() {
//    window.log("Main.js Inner - from debug.js (Javascript Components)");
});

var demoApp = angular.module('demoApp', ['ngRoute']);

demoApp.controller('ChartsController', ['$scope', function($scope) {}]);
demoApp.controller('jQPlotController', ['$scope', function($scope) {}]);
demoApp.controller('TreesController', ['$scope', function($scope) {}]);
demoApp.controller('TablesController', ['$scope', function($scope) {}]);
demoApp.controller('jQTableController', ['$scope', function($scope) {}]);
demoApp.controller('PageLayoutsController', ['$scope', function($scope) {}]);
demoApp.controller('MasonryController', ['$scope', function($scope) {}]);
demoApp.controller('SalvattoreController', ['$scope', function($scope) {}]);
demoApp.controller('PackeryController', ['$scope', function($scope) {}]);
demoApp.controller('IsotopController', ['$scope', function($scope) {}]);

demoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/charts', {                            //jQPlot,???
        templateUrl: 'partials/charts.html',
        controller: 'ChartsController'
      })
      .when('/jQPlot', {
        templateUrl: 'partials/jQPlot.html',
        controller: 'jQPlotController'
      })
      .when('/trees', {
        templateUrl: 'partials/trees.html',
        controller: 'TreesController'
      })
      .when('/tables', {
        templateUrl: 'partials/tables.html',
        controller: 'TablesController'
      })
      .when('/jQTable', {
        templateUrl: 'partials/jQTable.html',
        controller: 'jQTableController'
      })
      .when('/pagelayouts', {                       //Massonry,Salvattore,Isotop,Packery
        templateUrl: 'partials/PageLayouts.html',
        controller: 'PageLayoutsController'
      })
      .when('/masonry', {
        templateUrl: 'partials/masonry.html',
        controller: 'MasonryController'
      })
      .when('/salvattore', {
        templateUrl: 'partials/salvattore.html',
        controller: 'SalvattoreController'
      })
      .when('/isotop', {
        templateUrl: 'partials/isotop.html',
        controller: 'IsotopController'
      })
      .when('/packery', {
        templateUrl: 'partials/packery.html',
        controller: 'PackeryController'
      })
      .otherwise({redirectTo:'/'});
    }]);    

