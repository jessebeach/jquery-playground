(function ($, window, document) {
	function init () {
		buildDialog.call($('.dialog'));
	}
	function buildDialog () {
		$(this).dialog();
	}
	$(document).ready(init);
}(jQuery));