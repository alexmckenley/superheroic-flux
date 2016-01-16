angular.module( 'shf.components.message-section', [])

.directive( 'messageSection', function messageSectionDirective() {
  return {
    template: '<h2>{{ \'hello\' }} Message Section</h2>'
  };
});

