var utils = angular.module('utils', []);

utils.filter('trimText', function(defaultTrimLength){
	return function(data, trimLength){
		trimLength = trimLength || defaultTrimLength;
		return data.length <= trimLength ? data : data.substr(0,trimLength) + '...';
	}
});

utils.filter('elapsed', function(){
	return function(date){
		return moment(date).fromNow();
	};
});