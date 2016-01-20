angular.module('shf.components.message-section', [
    'shf.stores.message',
    'shf.stores.thread'
])

.directive('messageSection', function messageSectionDirective() {
    return {
        scope: {},
        controller: 'MessageSectionCtrl as ctrl',
        templateUrl: 'components/message-section/message-section.tpl.html'
    };
})

.controller('MessageSectionCtrl', function(messageStore, threadStore) {
    var ctrl = this;

    init();

    function init() {
        messageStore.listen(getStateFromStores);
        threadStore.listen(getStateFromStores);

        getStateFromStores();
    }

    function getStateFromStores() {
        ctrl.messages = messageStore.getAllForCurrentThread();
        ctrl.thread = threadStore.getCurrent();
    }
});