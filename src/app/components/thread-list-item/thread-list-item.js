angular.module( 'shf.components.thread-list-item', [])

.directive( 'threadListItem', function threadListItemDirective() {
  return {
    controller: 'ThreadListItemCtrl as ctrl',
    scope: {
        currentThreadId: '&',
        thread: '&'
    },
    templateUrl: 'components/thread-list-item/thread-list-item.tpl.html'
  };
})

.controller('ThreadListItemCtrl', function() {});
