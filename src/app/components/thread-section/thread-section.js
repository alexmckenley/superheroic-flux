angular.module('shf.components.thread-section', [
    'shf.stores.message',
    'shf.stores.thread',
    'shf.stores.unread-thread'
])

.directive('threadSection', function threadSectionDirective() {
    return {
        controller: 'ThreadSectionController as ctrl',
        templateUrl: 'components/thread-section/thread-section.tpl.html'
    };
})

.controller('ThreadSectionController', function(messageStore, threadStore, unreadThreadStore) {
    var ctrl = this;


    messageStore.listen(getStateFromStores);
    threadStore.listen(getStateFromStores);
    unreadThreadStore.listen(getStateFromStores);

    function getStateFromStores() {
        ctrl.threads = threadStore.getAllChrono();
        ctrl.currentThreadID = threadStore.getCurrentID();
        ctrl.unreadCount = unreadThreadStore.getCount();
    }

    getStateFromStores();
});
