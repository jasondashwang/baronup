
var rawDPS =  function(AD, CC, CD, AS) {
	var rawDPS = AD * (1 + ((CC/100) * (1 + ((CD/100) - 2)))) * AS;
	return rawDPS;
}
var damageReduction = function(AR, AP, APper) {
	var damageReduction;
	if (AP <= 0 && APper <= 0) 
		damageReduction = 100 / (100 + AR);
	else if (AP <= 0 && APper > 0) 
		damageReduction = 100 / (100 + ((1 - (APper /100)) * AR));
	else if ((APper <= 0 && AP > 0)) 
		damageReduction = 100 / (100 + (AR - AP));
	else 
		damageReduction = 100 / (100 + ((1 - (APper /100)) * AR) - AP);
	return damageReduction;
}
var DPS = function(AD, CC, CD, AS, AR, AP, APper, HP5) {
	var DPS = (rawDPS(AD,CC,CD,AS) * damageReduction(AR,AP,APper)) - (HP5 / 5);
	return DPS;
}
var timeTaken = function(AD, CC, CD, AS, AR, AP, APper, HP5, HP) {
	var timeTaken = HP / DPS(AD,CC,CD,AS,AR,AP,APper,HP5);
	return timeTaken;
}
var hits = function(AD, CC, CD, AS, AR, AP, APper, HP5, HP) {
	var hits = timeTaken(AD,CC,CD,AS,AR,AP,APper,HP5,HP) * AS;
	return hits;
}

var submit = function() {
	var AD = parseInt(document.getElementById('AD').value, 10);  //parseInt(string, num base)
	var CC = parseInt(document.getElementById('CC').value, 10);
	var CD = parseInt(document.getElementById('CD').value, 10);
	var AS = parseInt(document.getElementById('AS').value, 10);
	var AR = parseInt(document.getElementById('AR').value, 10);
	var AP = parseInt(document.getElementById('AP').value, 10);
	var APper = parseInt(document.getElementById('APper').value, 10);
	var HP5 = parseInt(document.getElementById('HP5').value, 10);
	var HP = parseInt(document.getElementById('HP').value, 10);
	
	var outputtext = "Raw DPS: ";
	outputtext += rawDPS(AD, CC, CD, AS).toString();
	outputtext += "\n Damage Reduction: ";
	outputtext += damageReduction(AR, AP, APper).toString();
	outputtext += "\n DPS: ";
	outputtext += DPS(AD, CC, CD, AS, AR, AP, APper, HP5).toString();
	outputtext += " ";
	outputtext += timeTaken(AD, CC, CD, AS, AR, AP, APper, HP5, HP).toString();
	outputtext += " ";
	outputtext += hits(AD, CC, CD, AS, AR, AP, APper, HP5, HP).toString();
	document.getElementById('output').value = outputtext;
}
var changePicture = function() {
	var name = document.getElementById(champ).value;
	pathName = "/images/champion/".concat(name).concat(".png");
	document.getElementById(champPicture).src = pathName;
}