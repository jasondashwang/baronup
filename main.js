$(document).ready(function() {
	var name = $('#ChampName').val;
	$.getJSON("champion.json", function(data) {
		$('#ChampArmor').val = data.name.stats.armor;
	});
});