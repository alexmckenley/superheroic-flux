angular.module( 'shf.utils.chat-message-data', [
    'shf.stores.thread'
])

.factory( 'chatMessageDataUtils', function chatMessageDataUtils(threadStore) {
    var util = {
        getCreatedMessageData: getCreatedMessageData 
    };


    function getCreatedMessageData(text) {
        var timestamp = Date.now();

        return {
            id: 'm_' + timestamp,
            threadID: threadStore.getCurrentID(),
            authorName: 'Bill', // hard coded for this example
            date: new Date(timestamp),
            text: text,
            isRead: true
        };
    }

    return util;
});
