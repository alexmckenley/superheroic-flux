angular.module( 'shf.alt', [])

.factory( 'alt', function alt() {
	var a = new Alt();
	Alt.debug('alt', a);
	return a;
});
