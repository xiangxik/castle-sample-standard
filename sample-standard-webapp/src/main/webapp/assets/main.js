requirejs.config({
	paths : {
		text : "//cdn.bootcss.com/require-text/2.0.12/text.min",
		css : "//cdn.bootcss.com/require-css/0.1.8/css.min",
		domReady : "//cdn.bootcss.com/require-domReady/2.0.1/domReady.min",
		jquery : "//cdn.bootcss.com/jquery/2.2.4/jquery.min",
		bootstrap : "//cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min",
		slimscroll : "//cdn.bootcss.com/jQuery-slimScroll/1.3.8/jquery.slimscroll.min",
		fastclick : "//cdn.bootcss.com/fastclick/1.0.6/fastclick.min",

		app : base + "/assets/adminlte/js/app.min",
		demo : base + "/assets/adminlte/js/demo"
	},
	shim : {
		slimscroll : [ "jquery" ],
		bootstrap : {
			deps : [ "jquery" ],
			exports : "bootstrap"
		},
		app : [ "jquery", "bootstrap", "slimscroll", "fastclick" ],
		demo : [ "app" ]
	}
});

requirejs([ "domReady", "jquery", "demo" ], function(ready, $, demo) {
	ready(function() {

	});
});