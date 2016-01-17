angular.module( 'shf.actions.chat-thread', [])

.factory( 'chatServerActions', function chatThreadActionsFactory(alt) {
    function ChatThreadActions() {
        this.generateActions('clickThread');
    }
    
    return alt.createActions(ChatThreadActions);
});

