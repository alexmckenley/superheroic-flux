angular.module('shf.actions.chat-thread', [])

.factory('chatThreadActions', function chatThreadActionsFactory(alt) {
    function ChatThreadActions() {
        this.generateActions('clickThread');
    }
    
    return alt.createActions(ChatThreadActions);
});

