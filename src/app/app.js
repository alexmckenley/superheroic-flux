angular.module('shf', [
    'shf.actions',
    'shf.alt',
    'shf.stores',
    'shf.actions',
    'shf.components',
    'shf.utils',
    'shf.chat-example-data',
    'templates-app',
    'templates-common',
    'ui.router'
])

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('shf', {
        url: '',
        templateUrl: 'app.tpl.html',
        onEnter: function(chatWebApiUtils) {
            chatWebApiUtils.getAllMessages();
        }
    });
})

.run(function ($rootScope, chatExampleData) {
    chatExampleData.init(); // load example data into localstorage

    $rootScope.$on('$stateChangeError', function stateChangeError(event, toState, toParams, fromState, fromParams, error) {
        $log.error('Error in state transistion: ', error);
    });
});