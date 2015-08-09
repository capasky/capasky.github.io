
$(function() {
	$('.m-post .body img').each(function(i, img) {
		var parent = $(img).parent();
		if (parent.is('p')) {
			parent.addClass('f-tac image');
		}
	});
});