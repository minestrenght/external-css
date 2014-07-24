$(function() {
	$(document).on('input keypress', '.digits', function(e) {
		this.value = this.value.replace(/[^0-9]/g, '');
		e.stopPropagation();
	});
});
