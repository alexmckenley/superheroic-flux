angular.module( 'shf.actions.chat-message', [])

.factory( 'chatMessageActions', function chatMessageActionsFactory(alt) {
	function ChatMessageActions() {
		this.generateActions('receiveCreatedMessage', 'receiveAll');
	}

	ChatMessageActions.prototype = {
		createMessage: function(text) {
			this.dispatch(text)

			var message = ChatMessageDataUtils.getCreatedMessageData(text)
			ChatWebAPIUtils.createMessage(message)
		}
	};

    return alt.createActions(ChatMessageActions);
});

