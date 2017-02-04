requirejs.config({
	paths : {
		domReady : "//cdn.bootcss.com/require-domReady/2.0.1/domReady.min",
		jquery : "//cdn.bootcss.com/jquery/2.2.4/jquery.min",
		bootstrap : "//cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min",
		icheck : "//cdn.bootcss.com/iCheck/1.0.2/icheck.min",
		validator : "//cdn.bootcss.com/jquery.bootstrapvalidator/0.5.3/js/bootstrapValidator.min"
	},
	map : {
		"*" : {
			"css" : "//cdn.bootcss.com/require-css/0.1.8/css.min.js"
		}
	},
	shim : {
		slimscroll : [ "jquery" ],
		bootstrap : {
			deps : [ "jquery" ],
			exports : "bootstrap"
		},
		icheck : [ "bootstrap", "css!//cdn.bootcss.com/iCheck/1.0.2/skins/square/blue.css" ],
		validator : [ "bootstrap", "css!//cdn.bootcss.com/jquery.bootstrapvalidator/0.5.3/css/bootstrapValidator.min.css" ]
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
					location.href = base + "/center";
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