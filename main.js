$(document).ready(function() {
	var userChampion;
	$(".modal").hide();	
	$(".overlay").hide();
	$(".ChampSelect").click(function() {
		$(".modal").show();	
		$(".overlay").show();

		$.getJSON("championFull.json", function(data) {
			console.log(data);
			var output = '<ul style=list-style:none;>'
			$.each(data.data, function(key, val) {
				console.log(val.image.full);
				output += '<li style=display:inline;float:left;class:champions;height:10%;width:10%>';
				output += '<img src='+'Images/champion/'+ val.image.full+' />';
				output += '</li>';
			})
			output += '</ul>';
			$('.modal').html(output);
		})
		$('.champions').click(function() {

		});	
	});
	$('h5').click(function() {
		$(".modal").hide();	
		$(".overlay").hide();
	});
});