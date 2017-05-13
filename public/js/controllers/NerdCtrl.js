angular.module('NerdCtrl', []).controller('NerdController', function($scope) {

	$scope.tagline = 'Nothing beats a pocket protector!';
	$scope.artists = [{'artist_name':'Arctic monkeys', 'display_name':'arcticmonkeys', 'songs':[{'song_name':'song 1', 'id':'id1'},{'song_name':'song 2', 'id':'id2'}]},{'artist_name':'Fartic monkeys', 'display_name':'farticmonkeys', 'songs':[{'song_name':'song 1', 'id':'id1'},{'song_name':'song 2', 'id':'id2'}]}];

});