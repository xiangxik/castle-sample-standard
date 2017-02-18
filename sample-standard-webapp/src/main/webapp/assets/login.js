requirejs.config({
	paths : {
		domReady : "http://cdn.staticfile.org/require-domReady/2.0.1/domReady.min",
		jquery : "http://lib.sinaapp.com/js/jquery/2.2.4/jquery-2.2.4.min",
		bootstrap : "http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min",
		icheck : "http://cdn.staticfile.org/iCheck/1.0.2/icheck.min",
		validator : "http://cdn.staticfile.org/jquery.bootstrapvalidator/0.5.3/js/bootstrapValidator.min"
	},
	map : {
		"*" : {
			"css" : "http://cdn.staticfile.org/require-css/0.1.8/css.min.js"
		}
	},
	shim : {
		slimscroll : [ "jquery" ],
		bootstrap : {
			deps : [ "jquery" ],
			exports : "bootstrap"
		},
		icheck : [ "bootstrap", "css!http://cdn.staticfile.org/iCheck/1.0.2/skins/square/blue.css" ],
		validator : [ "bootstrap", "css!http://cdn.staticfile.org/jquery.bootstrapvalidator/0.5.3/css/bootstrapValidator.min.css" ]
	}
});

requirejs([ "domReady", "jquery", "icheck", "validator" ], function(ready, $, demo) {
	ready(function() {
		$('input').iCheck({
			checkboxClass : 'icheckbox_square-blue',
			radioClass : 'iradio_square-blue',
			increaseArea : '20%' // optional
		});
		$("#refreshCaptchaButton").on("click", function() {
			$(this).children("img").attr("src", base + "/captcha.jpg?_t=" + new Date().getTime());
		});
		$("form").bootstrapValidator().on('success.form.bv', function(e) {
			e.preventDefault();
			var $form = $(e.target);
			var bv = $form.data('bootstrapValidator');
			$.post($form.attr('action'), $form.serialize(), function(result) {
				if (result.success) {
					$(".login-box-msg").nextAll(".alert").remove();
					location.href = base + "/index";
				} else {
					$(".login-box-msg").nextAll(".alert").remove();
					$(".login-box-msg").after("\
								<div class=\"alert alert-danger alert-dismissible\" role=\"alert\">\
								  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\
								  <strong>错误提示!</strong> " + result.msg + "\
								</div>");
					$("#refreshCaptchaButton").children("img").attr("src", base + "/captcha.jpg?_t=" + new Date().getTime());
					$form.bootstrapValidator('disableSubmitButtons', false);
				}
			}, "json");
		});
	});
});