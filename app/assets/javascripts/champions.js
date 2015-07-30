angular.module('Champion', []).controller('ChampionCtrl', function($scope, $http) {
	var key = "40c0236b-48f3-4f53-93e5-4966062c87e7"; 
	var api_version = "1.2";
	var region = "na";
	var url = "https://global.api.pvp.net/api/lol/static-data/"+region+"/v"+api_version+"/champion?champData=all&api_key="+key;
	var dd_version = "5.14.1";
	$http.get("https://global.api.pvp.net/api/lol/static-data/na/v1.2/versions?api_key=40c0236b-48f3-4f53-93e5-4966062c87e7").success(function(data){
		dd_version = data[0];
	});
	var itemUrl = "https://global.api.pvp.net/api/lol/static-data/na/v1.2/item?itemListData=all&api_key=40c0236b-48f3-4f53-93e5-4966062c87e7";
	$scope.items = [];
	$http.get(itemUrl).success(function(data){
		for (var i in data["data"]) {
			data["data"][i]["image_url"] = "http://ddragon.leagueoflegends.com/cdn/"+dd_version+"/img/item/" + data["data"][i]["image"]["full"];
			$scope.items.push(data["data"][i]);
		};	
	});
	$scope.champions;
	var championArray = [];
	$http.get(url).success(function(data){
		for (var i in data["data"]) {
			data["data"][i]["image_url"] = "http://ddragon.leagueoflegends.com/cdn/"+dd_version+"/img/champion/" + data["data"][i]["image"]["full"];
			data["data"][i]["profile_image_url"] = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+i+"_"+data["data"][i]["skins"][0]["num"]+".jpg";
			data["data"][i]["stats"]["criticaldamage"] = 200;
			data["data"][i]["stats"]["cooldownreduction"] = 0;
			data["data"][i]["stats"]["spellvamp"] = 0;
			data["data"][i]["stats"]["lifesteal"] = 0;
			data["data"][i]["stats"]["attackspeed"] = 40;
			championArray.push(data["data"][i]);
		};
		$scope.champions = championArray;	
	});
	$scope.attackChampion = null;
	$scope.setAttackChampion = function(champion) {
		$scope.attackChampion = champion;
	};
	$scope.defendChampion = null;
	$scope.setDefendChampion = function(champion) {
		$scope.defendChampion = champion;
	};
});