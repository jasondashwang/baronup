$(document).ready(function() {
	$(".modal").hide();	
	$(".overlay").hide();	

	$(".ChampSelect").click(function() {
		$(".modal").show();	
		$(".overlay").show();

		$.getJSON("champions.json", function(data) {
			var output = '<ul class="ChampionsDisplay">'
			$.each(data, function(key, val) {
				output += '<li>';
				output += '<img href="' + 'images/champion/' + val.image.full + '">';
				output += '</li>';
			})
		})	
	});
	$('h5').click(function() {
		$(".modal").hide();	
		$(".overlay").hide();
	});


});