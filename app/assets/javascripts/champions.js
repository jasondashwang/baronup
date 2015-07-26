angular.module('Champion', [
]).controller('ChampionCtrl', function($scope, $http){
		var url = "https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=image&api_key=40c0236b-48f3-4f53-93e5-4966062c87e7";
		var array = [];
		var version = "5.14.1";
		$http.get("https://global.api.pvp.net/api/lol/static-data/na/v1.2/versions?api_key=40c0236b-48f3-4f53-93e5-4966062c87e7").success(function(data){
			version = data[0];
		});
		$scope.champions = null;
		$http.get(url).success(function(data){
			for (var i in data["data"]) {
				data["data"][i]["image_url"] = "http://ddragon.leagueoflegends.com/cdn/"+version+"/img/champion/" + data["data"][i]["image"]["full"]
				array.push(data["data"][i]);
			};	
			$scope.champions = array;
		});
		$scope.userChampion = null;
		$scope.setCurrentChampion = function(champion) {
			$scope.userChampion = champion;
		};
	});