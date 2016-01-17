angular.module( 'shf.dispatcher', [])

.factory( 'dispatcher', function altDispatcher() {
	return new Alt();
});
