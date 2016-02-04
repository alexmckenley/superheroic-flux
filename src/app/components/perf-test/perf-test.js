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
    var interval, interval2;

    init();

    function init() {

        interval = $interval(function() {
            count++;
            chatMessageActions.createMessage(count);
        }, 10);

        interval2 = $interval(function() {
            getStateFromStores();
        }, 500);

        $scope.$on('$destroy', function() {
            $interval.cancel(interval);
            $interval.cancel(interval2);
        });
    }

    function getStateFromStores() {
        ctrl.messagesPerSecond = Math.floor(perfStore.getAverageMessagesPerSecond());
        ctrl.totalMessages = perfStore.getTotalMessages();
    }
});
