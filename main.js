$(document).ready(function() {
	var userChampion;
	$(".pop").hide();
	$('#boxclose').click(function() {
		$('.pop').hide();
	})	
	$(".ChampSelect").click(function() {
		$(".pop").show();	
		$.getJSON("championFull.json", function(data) {
			var output = '<ul style=list-style:none;>';
			$.each(data.data, function(key, val) {
				output += '<li style=display:inline;float:left;height:10%;width:10%;' + ' id=' + val.id + '>';
				output += '<img src='+'Images/champion/'+val.image.full+' />';
				output += '</li>';
			});
			output += '</ul>';
			$('.modal').html(output);
		})
	});
	$('#close').click(function() {
		$(".pop").hide();	
	});	

	var myImage = document.querySelector('.modal img');
	$('myImage').click(function() {
		userChampion = myImage.getAttribute('id');
		console.log(userChampion);
	})

});