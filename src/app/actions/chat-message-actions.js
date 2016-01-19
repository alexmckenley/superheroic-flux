angular.module( 'shf.actions.chat-message', [])

.factory( 'chatMessageActions', function chatMessageActionsFactory(alt, chatWebApiUtils, chatMessageDataUtils) {
    function ChatMessageActions() {
        this.generateActions('createMessage', 'receiveAll');
    }

    ChatMessageActions.prototype = {
        createMessage: function(text) {
            return function(dispatch) {
                console.log('createMessageAction');
                dispatch(text);

                var message = chatMessageDataUtils.getCreatedMessageData(text);
                chatWebApiUtils.createMessage(message);
            };
        }
    };

    return alt.createActions(ChatMessageActions);
});

