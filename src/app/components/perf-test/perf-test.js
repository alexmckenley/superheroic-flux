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

.controller('PerfTestCtrl', function(perfStore) {
    var ctrl = this;

    init();

    function init() {
        perfStore.listen(getStateFromStores);

        getStateFromStores();
    }

    function getStateFromStores() {
        ctrl.messagesPerSecond = perfStore.getMessagesPerSecond();
    }
});
