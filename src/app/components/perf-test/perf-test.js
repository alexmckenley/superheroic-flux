angular.module('shf.components.perf-test', [
    'shf.stores.perf'
])

.directive('perfTest', function perfTestDirective() {
    return {
        bindToController: true,
        controller: 'PerfTestCtrl as ctrl',
        scope: {},
        templateUrl: 'components/perf-test/perf-test.tpl.html'
    };
})

.controller('PerfTestCtrl', function($interval, $scope, chatMessageActions, perfStore) {
    var ctrl = this;
    var count = 0;
    var interval;

    init();

    function init() {
        perfStore.listen(getStateFromStores);

        getStateFromStores();

        interval = $interval(function() {
            count++;
            chatMessageActions.createMessage(count);
        }, 10);

        $scope.$on('$destroy', function() {
            $interval.cancel(interval);
        });
    }

    function getStateFromStores() {
        ctrl.messagesPerSecond = perfStore.getMessagesPerSecond();
    }
});
