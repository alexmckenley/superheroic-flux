angular.module( 'shf.stores.unread-thread', [
	'shf.actions.chat-server',
	'shf.actions.chat-thread',
	'shf.stores.message',
	'shf.stores.thread'
])

.factory( 'unreadThreadStore', function unreadThreadStoreFactory(alt, chatServerActions, chatThreadActions, messageStore, threadStore) {
	function UnreadThreadStore() {
		this.bindActions(chatThreadActions);
		this.bindActions(chatServerActions);
	}

	UnreadThreadStore.prototype = {
		onClickThread: function(threadID) {
			this.wait();
		},

		onReceiveRawMessages: function(rawMessages) {
			this.wait();
		},

		wait: function() {
			this.waitFor([
				ThreadStore.dispatchToken,
				MessageStore.dispatchToken
			]);
		}
	};
	
	return alt.createStore(UnreadThreadStore, 'UnreadThreadStore');
});

