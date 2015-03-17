$(document).ready(function() {
	var userChampion;
	var user;
	$(".pop").hide();
	$(".ChampSelect").click(function() {
		$(".pop").show();
		$('#boxclose').click(function() {
			console.log('hi');	//$('.pop').hide();
		});	
		$.getJSON("championFull.json", function(data) {
			var output = '<ul style=list-style:none;>';
			$.each(data.data, function(key, val) {
				output += '<li style=display:inline;float:left;height:10%;width:10%;>';
				output += '<img src='+'Images/champion/'+val.image.full+' id=' + val.id + ' />';
				output += '</li>';
			});
			output += '</ul>';
			$('.modal').html(output);
			$('ul').click(function(event) {
				var name = event.target.id;
				user = 'champion/' + event.target.id + '.json';
				$.getJSON(user, function(data) {

					$(".pop").hide();
					$('#ChampName').html(name);
					var path = 'Images/champion/' + $('#ChampName').html() + '.png';
					$('#ChampImage').attr('src', path);
					$('#ChampHPRegen').html(data.stats.hpregen);
					$('#ChampManaRegen').html(data.stats.mpregen);
					$('#ChampArmorPenetration').html('0 | 0%');
					$('#ChampMagicPenetration').html('0 | 0%');
					$('#ChampCriticalDamage').html(200);
					$('#ChampCriticalChance').html(0);
					$('#ChampSpellVamp').html(0);
					$('#ChampLifeSteal').html(0);
					$('#ChampCooldownReduction').html(0);
					$('#ChampAbilityPower').html(0);
					$('#ChampAttackDamage').html(data.stats.attackdamage);
					$('#ChampAttackSpeed').html(parseFloat(Math.round((0.625/(1 + parseFloat(data.stats.attackspeedoffset)))*1000)/1000).toFixed(3));
					$('#ChampArmor').html(data.stats.armor);
					$('#ChampMagicResist').html(data.stats.spellblock);
					$('#ChampRange').html(data.stats.attackrange);
					$('#ChampMovementSpeed').html(data.stats.movespeed);	
				});

				$(".pop").hide();
				$('#ChampName').html(name);
				var path = 'Images/champion/' + $('#ChampName').html() + '.png';
				$('#ChampImage').attr('src', path);
				$('#ChampHPRegen').html(data.stats.hpregen);
				$('#ChampManaRegen').html(data.stats.mpregen);
				$('#ChampHealth').html(data.stats.hp);
				$('#ChampMana').html(data.stats.mp);
				$('#ChampArmorPenetration').html('0 | 0%');
				$('#ChampMagicPenetration').html('0 | 0%');
				$('#ChampCriticalDamage').html(200);
				$('#ChampCriticalChance').html(0);
				$('#ChampSpellVamp').html(0);
				$('#ChampLifeSteal').html(0);
				$('#ChampCooldownReduction').html(0);
				$('#ChampAbilityPower').html(0);
				$('#ChampAttackDamage').html(0);
				$('#ChampAttackSpeed').html(0);
				$('#ChampArmor').html(data.stats.armor);
				$('#ChampMagicResist').html(data.stats.spellblock);
				$('#ChampRange').html(data.stats.attackrange);
				$('#ChampMovementSpeed').html(data.stats.movespeed);	});

			}); 
		});
	});
	var oppChampion;
	var opp;	
	$(".OppSelect").click(function() {
		$(".pop").show();
		$.getJSON("championFull.json", function(data) {
			var output = '<ul style=list-style:none;>';
			$.each(data.data, function(key, val) {
				output += '<li style=display:inline;float:left;height:10%;width:10%;>';
				output += '<img src='+'Images/champion/'+val.image.full+' id=' + val.id + ' />';
				output += '</li>';
			});
			output += '</ul>';
			$('.modal').html(output);
			$('ul').click(function(event) {
				var name = event.target.id;
				opp = 'champion/' + event.target.id + '.json';
				$.getJSON(opp, function(data) {

					$(".pop").hide();
					$('#OppName').html(name);
					var path = 'Images/champion/' + $('#OppName').html() + '.png';
					$('#OppImage').attr('src', path);
					$('#OppHPRegen').html(data.stats.hpregen);
					$('#OppManaRegen').html(data.stats.mpregen);
					$('#OppArmorPenetration').html('0 | 0%');
					$('#OppMagicPenetration').html('0 | 0%');
					$('#OppCriticalDamage').html(200);
					$('#OppCriticalChance').html(0);
					$('#OppSpellVamp').html(0);
					$('#OppLifeSteal').html(0);
					$('#OppCooldownReduction').html(0);
					$('#OppAbilityPower').html(0);
					$('#OppAttackDamage').html(data.stats.attackdamage);
					$('#OppAttackSpeed').html(parseFloat(Math.round((0.625/(1 + parseFloat(data.stats.attackspeedoffset)))*1000)/1000).toFixed(3));
					$('#OppArmor').html(data.stats.armor);
					$('#OppMagicResist').html(data.stats.spellblock);
					$('#OppRange').html(data.stats.attackrange);
					$('#OppMovementSpeed').html(data.stats.movespeed);	
				});

				$(".pop").hide();
				$('#OppName').html(name);
				var path = 'Images/champion/' + $('#OppName').html() + '.png';
				$('#OppImage').attr('src', path);
				$('#OppHPRegen').html(data.stats.hpregen);
				$('#OppManaRegen').html(data.stats.mpregen);
				$('#OppMana').html(data.stats.mp);
				$('#OppHealth').html(data.stats.hp);
				$('#OppArmorPenetration').html('0 | 0%');
				$('#OppMagicPenetration').html('0 | 0%');
				$('#OppCriticalDamage').html(200);
				$('#OppCriticalChance').html(0);
				$('#OppSpellVamp').html(0);
				$('#OppLifeSteal').html(0);
				$('#OppCooldownReduction').html(0);
				$('#OppAbilityPower').html(0);
				$('#OppAttackDamage').html(0);
				$('#OppAttackSpeed').html(0);
				$('#OppArmor').html(data.stats.armor);
				$('#OppMagicResist').html(data.stats.spellblock);
				$('#OppRange').html(data.stats.attackrange);
				$('#OppMovementSpeed').html(data.stats.movespeed);	
			});
			}); 
		});
	});
	$('#boxclose').click(function() {
		$('.pop').hide()
	});
	$('#sliderOutput').change(function() {
		var champ = 'champion/' + $('ChampName').html() + '.json';
		var level = parseInt($('#sliderOutput')) - 1;
		$.getJSON(champ, function(data) {
			$('#ChampHPRegen').html((level*parseInt(data.stats.hpregenperlevel)) + parseInt($('#ChampHPRegen').html()));
			$('#ChampManaRegen').html((level*parseInt(data.stats.mpregenperlevel)) + parseInt($('#ChampManaRegen').html()));
			$('#ChampArmor').html((level*parseInt(data.stats.armorperlevel)) + parseInt($('#ChampHPRegen').html()));
			$('#ChampMagicResist').html((level*parseInt(data.stats.spellblockperlevel)) + parseInt($('#ChampHPRegen').html()));
		});
	});	
});
