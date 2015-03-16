$(document).ready(function() {
	$(".modal").hide();	
	$(".overlay").hide();	

	$(".ChampSelect").click(function() {
		$(".modal").show();	
		$(".overlay").show();

		$.getJSON("championFull.json", function(data) {
			var output = '<ul>'
			$.each(data, function(key, val) {
				output += '<li>';
				output += '<h1>' + data.val.name + '</h1>';
				output += '</li>';
			})
			output += '</ul>';
			$('.modal').html(output);
		})	
	});
	$('h5').click(function() {
		$(".modal").hide();	
		$(".overlay").hide();
	});

});