angular.module( 'shf.stores', [
    'shf.stores.message',
    'shf.stores.thread',
    'shf.stores.unread-thread'
])

.run(function(messageStore, threadStore, unreadThreadStore) {});
