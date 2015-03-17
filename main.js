$(document).ready(function() {
	var userChampion;
	$(".modal").hide();	
	$(".overlay").hide();
	$(".ChampSelect").click(function() {
		$(".modal").show();	
		$(".overlay").show();
		$.getJSON("championFull.json", function(data) {
			var output = '<h5 style=color:white;>x</h5>';
			output += '<ul style=list-style:none;>'
			$.each(data.data, function(key, val) {
				output += '<li style=display:inline;float:left;height:10%;width:10%;' + ' id=' + val.id + '>';
				output += '<img src='+'Images/champion/'+val.image.full+' />';
				output += '</li>';
			})
			output += '</ul>';
			$('.modal').html(output);
		})
	});
	$('#close').click(function() {
		$(".modal").hide();	
		$(".overlay").hide();
	});	

	var myImage = document.querySelector('.modal img');
	$('myImage').click(function() {
		userChampion = myImage.getAttribute('id');
		console.log(userChampion);
	})

});