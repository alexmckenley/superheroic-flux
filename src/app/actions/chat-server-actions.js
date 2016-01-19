angular.module( 'shf.actions.chat-server', [])

.factory('chatServerActions', function chatServerActionsFactory(alt) {
    function ChatServerActions() {
        this.generateActions('receiveCreatedMessage', 'receiveAll');
    }
    
    return alt.createActions(ChatServerActions);
});
