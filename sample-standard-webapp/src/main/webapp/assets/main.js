requirejs.config({
	paths : {
		domReady : "//cdn.bootcss.com/require-domReady/2.0.1/domReady.min",
		director : "//cdn.bootcss.com/Director/1.2.8/director.min",
		jquery : "//cdn.bootcss.com/jquery/2.2.4/jquery.min",
		bootstrap : "//cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min",
		dialog : "//cdn.bootcss.com/jquery-confirm/3.0.3/jquery-confirm.min",
		slimscroll : "//cdn.bootcss.com/jQuery-slimScroll/1.3.8/jquery.slimscroll.min",
		fastclick : "//cdn.bootcss.com/fastclick/1.0.6/fastclick.min",
		icheck : "//cdn.bootcss.com/iCheck/1.0.2/icheck.min",
		validator : "//cdn.bootcss.com/jquery.bootstrapvalidator/0.5.3/js/bootstrapValidator.min",

		bootgrid_base : base + "/assets/adminlte/vendor/jquery.bootgrid/jquery.bootgrid",
		bootgrid : base + "/assets/adminlte/vendor/jquery.bootgrid/jquery.bootgrid.fa.min",

		app : base + "/assets/adminlte/js/app.min"
	},
	map : {
		"*" : {
			"css" : "//cdn.bootcss.com/require-css/0.1.8/css.min.js",
			"text" : "//cdn.bootcss.com/require-text/2.0.12/text.min.js"
		}
	},
	shim : {
		slimscroll : [ "jquery" ],
		bootstrap : {
			deps : [ "jquery" ],
			exports : "bootstrap"
		},
		dialog : [ "bootstrap", "css!//cdn.bootcss.com/jquery-confirm/3.0.3/jquery-confirm.min.css" ],
		icheck : [ "bootstrap", "css!//cdn.bootcss.com/iCheck/1.0.2/skins/square/blue.css" ],
		validator : [ "bootstrap", "css!//cdn.bootcss.com/jquery.bootstrapvalidator/0.5.3/css/bootstrapValidator.min.css" ],
		bootgrid_base : [ "bootstrap", "css!" + base + "/assets/adminlte/vendor/jquery.bootgrid/jquery.bootgrid.min.css" ],
		bootgrid : [ "bootgrid_base" ],
		app : [ "jquery", "bootstrap", "dialog", "slimscroll", "fastclick" ]
	}
});

requirejs([ "domReady", "director", "jquery", "app" ], function(ready, director, $, app) {
	ready(function() {
		var contentWrapper = $(".content-wrapper");
		var $body = $("body");
		var routes = {
			"/page" : {
				"?((\w|.)*)" : function(path) {
					require([ "text!" + base + "/" + path + "?_t=" + (new Date()).getTime() ], function(html) {
						contentWrapper.html(html);
						$body.removeClass('sidebar-open');
					});
				}
			}
		};
		var router = Router(routes);
		router.init();

		var hash = window.location.hash;
		if (hash && hash != "") {

		} else {
			window.location.href = "#/page/dashboard";
		}
	});
});