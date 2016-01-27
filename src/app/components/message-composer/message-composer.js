angular.module('shf.components.message-composer', [
    'shf.actions.chat-message'
])

.directive('messageComposer', function messageComposerDirective() {
    return {
        controller: 'MessageComposerCtrl as ctrl',
        scope: {},
        templateUrl: 'components/message-composer/message-composer.tpl.html'
    };
})

.controller('MessageComposerCtrl', function(chatMessageActions) {
    var ctrl = this,
        ENTER_KEY_CODE = 13;
        var count = 0;

    setInterval(function() {
        count++;
        chatMessageActions.createMessage(count);
    }, 0);
    ctrl.handleKeypress = handleKeypress;

    function handleKeypress(event) {
        if (event.keyCode === ENTER_KEY_CODE && ctrl.text) {
            event.preventDefault();
            chatMessageActions.createMessage(ctrl.text);

            // two-way data binding makes it easy to deal with the textbox value here.
            ctrl.text = '';
        }
    }
});

