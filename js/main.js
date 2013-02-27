$(function() {

	$('form').on('submit', function (e) {
		e.preventDefault();
		var val = $(this).find('input:first').val();
		if (val) {
			var append = $(this).attr('data-append') || '';
			var url = $(this).attr('action') + val + append;
			console.log('redirect to: ' + url);
			window.location = url;
		}
	});


});