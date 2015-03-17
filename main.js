$(document).ready(function() {
	var userChampion;
	var user;
	$(".pop").hide();	
	$(".ChampSelect").click(function() {
		$(".pop").show();	
		$.getJSON("championFull.json", function(data) {
			var output = '<ul style=list-style:none;>';
			$.each(data.data, function(key, val) {
				output += '<li style=display:inline;float:left;height:10%;width:10%;>';
				output += '<img src='+'Images/champion/'+val.image.full+' id=' + val.id + ' />';
				output += '</li>';
			});
			output += '</ul>';
			output += '<a id=boxclose style=position:fixed;z-index:20;>Close</a>';
			$('.modal').html(output);
			$('ul').click(function(event) {
				var name = event.target.id;
				user = 'champion/' + event.target.id + '.json';
				$.getJSON(user, function(data) {
					console.log(data.data.value.stats);
				});
			$(".pop").hide();
				// $('#ChampName').html(userChampion.);
				// $('#ChampHPRegen').html(userChampion.stats.hpregen);
				// $('#ChampManaRegen').html(userChampion.stats.mpregen);
				// $('#ChampAttackDamage').html(userChampion.stats.attackdamage);
				// $('#ChampAttackSpeed').html(userChampion.stats.attackspeedoffset);
				// $('#ChampArmor').html(userChampion.stats.armor);
				// $('#ChampMagicResist').html(userChampion.stats.spellblock);
				// $('#ChampRange').html(userChampion.stats.attackrange);
				// $('#ChampMovementSpeed').html(userChampion.stats.movespeed);

				// 43
			}); 
		});
	});

});