$(document).ready(function() {
	$(".modal").hide();	
	$(".overlay").hide();	

	$(".ChampSelect").click(function() {
		$(".modal").show();	
		$(".overlay").show();

		$.getJSON("championFull.json", function(data) {
			var output = '<ul class="ChampionsDisplay">'
			$.each(data, function(key, val) {
				output += '<li>';
				output += '<h1>' + val.id '</h1>';
				output += '</li>';
			})
			output += '</ul>';
		})	
	});
	$('h5').click(function() {
		$(".modal").hide();	
		$(".overlay").hide();
	});
//'<img href="' + 'images/champion/' + val.image.full + '">'

});