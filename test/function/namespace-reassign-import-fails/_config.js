var path = require( 'path' );
var assert = require( 'assert' );

module.exports = {
	description: 'disallows reassignments to namespace exports',
	error: function ( err ) {
		assert.equal( path.normalize( err.file ), path.resolve( __dirname, 'main.js' ) );
		assert.deepEqual( err.loc, { character: 31, line: 3, column: 0 });
		assert.ok( /Illegal reassignment/.test( err.message ) );
	}
};

// test copied from https://github.com/esnext/es6-module-transpiler/tree/master/test/examples/namespace-reassign-import-fails
