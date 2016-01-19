angular.module( 'shf.actions.chat-server', [])

.factory( 'chatServerActions', function chatServerActionsFactory(alt) {
    function ChatServerActions() {
        this.generateActions('createMessage', 'receiveAll');
    }
    
    return alt.createActions(ChatServerActions);
});
