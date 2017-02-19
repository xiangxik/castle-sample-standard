requirejs.config({
	paths : {
		domReady : "http://cdn.staticfile.org/require-domReady/2.0.1/domReady.min",
		director : "https://cdn.staticfile.org/Director/1.2.8/director.min",
		bootstrap : "http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min",
		dialog : "http://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.0.3/jquery-confirm.min",
		slimscroll : "http://cdnjs.cloudflare.com/ajax/libs/jQuery-slimScroll/1.3.8/jquery.slimscroll.min",
		fastclick : "http://cdn.staticfile.org/fastclick/1.0.6/fastclick.min",
		icheck : "http://cdn.staticfile.org/iCheck/1.0.2/icheck.min",
		validator : "http://cdn.staticfile.org/jquery.bootstrapvalidator/0.5.3/js/bootstrapValidator.min",

		bootgrid_base : base + "/assets/adminlte/vendor/jquery.bootgrid/jquery.bootgrid",
		bootgrid : base + "/assets/adminlte/vendor/jquery.bootgrid/jquery.bootgrid.fa.min",

		treeview : "http://cdnjs.cloudflare.com/ajax/libs/bootstrap-treeview/1.2.0/bootstrap-treeview.min",

		fancytree : "http://cdnjs.cloudflare.com/ajax/libs/jquery.fancytree/2.21.0/jquery.fancytree-all.min",

		ztree : "http://cdnjs.cloudflare.com/ajax/libs/zTree.v3/3.5.28/js/jquery.ztree.core.min",
		ztree_check : "http://cdnjs.cloudflare.com/ajax/libs/zTree.v3/3.5.28/js/jquery.ztree.excheck.min",
		ztree_edit : "http://cdnjs.cloudflare.com/ajax/libs/zTree.v3/3.5.28/js/jquery.ztree.exedit.min",
		ztree_hide : "http://cdnjs.cloudflare.com/ajax/libs/zTree.v3/3.5.28/js/jquery.ztree.exhide.min",

		app : base + "/assets/adminlte/js/app.min"
	},
	map : {
		"*" : {
			"css" : "http://cdn.staticfile.org/require-css/0.1.8/css.min.js",
			"text" : "http://cdn.staticfile.org/require-text/2.0.12/text.min.js"
		}
	},
	shim : {
		dialog : [ "bootstrap", "css!http://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.0.3/jquery-confirm.min.css" ],
		icheck : [ "bootstrap", "css!http://cdn.staticfile.org/iCheck/1.0.2/skins/square/blue.css" ],
		validator : [ "bootstrap", "css!http://cdn.staticfile.org/jquery.bootstrapvalidator/0.5.3/css/bootstrapValidator.min.css" ],
		bootgrid_base : [ "bootstrap", "css!" + base + "/assets/adminlte/vendor/jquery.bootgrid/jquery.bootgrid.min.css" ],
		bootgrid : [ "bootgrid_base" ],
		treeview : [ "bootstrap", "css!http://cdnjs.cloudflare.com/ajax/libs/bootstrap-treeview/1.2.0/bootstrap-treeview.min.css" ],
		fancytree : [ "bootstrap", "css!http://cdnjs.cloudflare.com/ajax/libs/jquery.fancytree/2.21.0/skin-win8/ui.fancytree.min.css" ],
		ztree_check : [ "ztree" ],
		ztree_edit : [ "ztree" ],
		ztree_hide : [ "ztree" ],
		app : [ "bootstrap", "dialog", "slimscroll", "fastclick" ]
	}
});

requirejs([ "domReady", "director", "app" ], function(ready, director, app) {
	ready(function() {
		var contentWrapper = $(".content-wrapper");
		var $body = $("body");
		var routes = {
			"/page" : {
				"?((\w|.)*)" : function(path) {
					require([ "text!" + base + "/" + path + "?_ajax=req&_t=" + (new Date()).getTime() ], function(html) {
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