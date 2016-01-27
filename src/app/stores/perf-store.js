angular.module('shf.stores.perf', [
    'shf.actions.chat-message',
    'shf.alt'
])

.factory('perfStore', function perfStoreFactory(alt, chatMessageActions) {
    function PerfStore() {
        this.bindActions(chatMessageActions);

        this.perfAverage = null;
        this.perfLast = null;
        this._lastMessage = null;
    }

    PerfStore.prototype = {
        constructor: PerfStore,
        onCreateMessage: function() {
            var currentTime = performance.now(),
                millis;

            if (this.lastMessage) {
                millis = currentTime - this.lastMessage;
            }

            this.lastMessage = currentTime;

            this.perfAverage = this.perfAverage ? ((this.perfAverage + millis) / 2) : millis;
            this.perfLast = millis;
        }
    };

    PerfStore.getPerfAverage = function() {
        return this.getState().perfAverage;
    };

    PerfStore.getMessagesPerSecond = function() {
        return 1000 / this.getState().perfLast;
    };

    PerfStore.getAverageMessagesPerSecond = function() {
        return 1000 / this.getState().perfAverage;
    };

    return alt.createStore(PerfStore, 'PerfStore');
});