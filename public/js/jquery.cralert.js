/*!
*  jQuery CR Alert v1.0
*  https://github.com/Ruby-Application/Chat-Ruby
*/
(function($){
	$.fn.crAlert = function(options) {
		var crAlert = $("#cr-alert");

		if (crAlert.length > 0) {
			crAlert.remove();
		}

		var defaults = {
			message : "",
			delay : 5000,
			type : "info",
			fadeMessage : true,
			easing : "easeOutBounce"
		};
		var $alert;

		if (typeof options === "string") {
			options = $.extend({}, defaults, {message : options});
		} else if (typeof options === "object") {
			options = $.extend({}, defaults, options);
		}

		if (options.type == "danger") {
			options.fadeMessage = false;
		}

		$alert = $('<div>', {
			id : "cr-alert",
			css : {
				position : "fixed",
				top : -60,
				left : 0,
				width : "100%",
				padding : "0 15px"
			},
			appendTo : this
		}).html(
			$("<div>", {
				"class" : "alert alert-block alert-" + options.type
			}).html(options.message)
		).animate({
			top : 30
		}, 1000, options.easing);

		if (options.fadeMessage == true) {
			$alert.delay(options.delay).fadeOut(500, function() {
				$(this).remove();
			});
		}

		return this;
	};

	$(document).ready(function(){
		$('[data-toggle="cr-alert"').each(function(){
			var $this = $(this);
			var message = $this.attr('data-message'), type, delay, fadeMessage, easing;

			if (typeof message !== "undefined" && ($this.is('a') || $this.is('button'))) {
				type = $this.attr('data-type');
				delay = $this.attr('data-delay');
				fadeMessage = $this.attr('data-fade-message');
				fadeMessage = (typeof fadeMessage !== "undefined")? ((fadeMessage == "true")? true : false) : true;
				easing = $this.attr('data-easing');

				$this.click(function(e){
					e.preventDefault();
					$('body').crAlert({
						message : message,
						type : type,
						delay : delay,
						fadeMessage : fadeMessage,
						easing : easing
					});
				});
			}
		});
	});
})(jQuery);