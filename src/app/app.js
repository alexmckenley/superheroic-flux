angular.module( 'shf', [
  'shf.actions',
  'shf.components',
  'shf.dispatcher',
  'templates-app',
  'templates-common',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $stateProvider.state( 'shf', {
    url: '',
    controller: 'AppCtrl',
    templateUrl: 'app.tpl.html'
  });
})

.run( function run ($rootScope) {
  $rootScope.$on('$stateChangeError', function stateChangeError(event, toState, toParams, fromState, fromParams, error) {
    $log.error('Error in state transistion: ', error);
  });
})

.controller( 'AppCtrl', function AppCtrl () {});

