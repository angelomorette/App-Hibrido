angular.module('starter').service('ProdutosService', function($http, $q) {

	return {
		lista: function(){
			return $http.get("http://cozinhapp.sergiolopes.org/produtos")
						.then(function(response){
							return response.data;
						});
		}
	};

});