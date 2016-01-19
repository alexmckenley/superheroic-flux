angular.module('shf.components.thread-list-item', [])

.directive('threadListItem', function threadListItemDirective() {
  return {
    bindToController: true,
    controller: 'ThreadListItemCtrl as ctrl',
    scope: {
        getCurrentThreadId: '&currentThreadId',
        getThread: '&thread'
    },
    templateUrl: 'components/thread-list-item/thread-list-item.tpl.html'
  };
})

.controller('ThreadListItemCtrl', function() {});
