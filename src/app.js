/* globals window, require */
/* eslint-disable no-var */

/**
 * External dependencies
 */
var React = require( 'react' );
var ReactDOM = require( 'react-dom' );

/**
 * Internal dependencies
 */
var ComponentThemePage = require( '../build' ).ComponentThemePage;

var ComponentThemes = {
	renderPage: function( theme, slug, page, target ) {
		var App = React.createElement( ComponentThemePage, { theme, page, slug } );
		ReactDOM.render( App, target );
	}
};

window.ComponentThemes = ComponentThemes;
