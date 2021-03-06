angular.module('shf.components.thread-section', [
    'shf.stores.message',
    'shf.stores.thread',
    'shf.stores.unread-thread'
])

.directive('threadSection', function threadSectionDirective() {
    return {
        scope: {},
        controller: 'ThreadSectionController as ctrl',
        templateUrl: 'components/thread-section/thread-section.tpl.html'
    };
})

.controller('ThreadSectionController', function(messageStore, threadStore, unreadThreadStore) {
    var ctrl = this;

    init();

    function init() {
        messageStore.listen(getStateFromStores);
        threadStore.listen(getStateFromStores);
        unreadThreadStore.listen(getStateFromStores);

        getStateFromStores();
    }

    function getStateFromStores() {
        ctrl.threads = threadStore.getAllChrono();
        ctrl.currentThreadId = threadStore.getCurrentID();
        ctrl.unreadCount = unreadThreadStore.getCount();
    }
});
