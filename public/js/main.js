// baseUrl will be /public/js/ b/c data-main=/public/js/main
requirejs.config({

	// gotta ditch this when you go to prod
	urlArgs: 'bust=' + (new Date()).getTime(),

	// define path aliases for the shim libraries
	paths: {
		"jquery": "jquery-2.0.3.min",
		"underscore": "underscore-1.5.2.min",
		"backbone": "backbone-1.1.0",
		"marionette": "backbone.marionette.min",
		"handlebars": "handlebars-v1.1.2",
		"text": "text",
		"domReady": "domReady",
        "bootstrap": "bootstrap.min"
	},
	shim: {
		// this is the ID of the module - this is what you 'depend' on
		'jquery':{
			exports: '$' // has to match the global export, per "shim" pattern
		},
		'underscore':{
			exports: '_'
		},
		'backbone':{
			deps: ['jquery','underscore'],
			exports: 'Backbone'
		},
		'handlebars':{
			deps: [],
			exports: 'Handlebars'
		},
		'marionette':{
			deps:['jquery','backbone','underscore'],
			exports:'Marionette'
		},
        'bootstrap':['jquery']
	}
});

require(['bootstrap', 'domReady'], function(undefined,undefined){//, 'routers/routes', 'app'], function (undefined, domReady, pAllRouters, app) {
    alert("hi there");
    // domReady(function () {
    //     app.start();
    // });
});
