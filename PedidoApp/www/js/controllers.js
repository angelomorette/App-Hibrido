angular.module('starter').controller('HomeController', function($scope, ProdutosService) {
	ProdutosService.lista().then(function(dados){
		$scope.bolos = dados;	
	});
});


angular.module('starter').controller('DetalheController', function($scope, ProdutosService, $stateParams) {
	ProdutosService.lista().then(function(dados){
		$scope.bolo = dados[$stateParams.boloId];
	});
});


angular.module('starter').controller('PedidoController', function($scope, $stateParams, $http, $state, $ionicPopup, $ionicLoading, ProdutosService){
 
	ProdutosService.lista().then(function(dados){
		$scope.bolo = dados[$stateParams.boloId];
	});

	$scope.dados = {};

	$scope.fecharPedido = function() {
		$ionicLoading.show();
		$http.get('http://cozinhapp.sergiolopes.org/novo-pedido', {
			params: {
				pedido: $scope.bolo.nome,
				info: $scope.dados.nome 
				      + ' (' + $scope.dados.telefone + ') - ' 
				      + $scope.dados.endereco
			}
		}).then(function() {
			//alerta da compra
			$ionicPopup.alert({
				title: 'Pedido confirmado!',
				template: 'Estamos preparando e esta a caminho'
			}).then(function(){
				$state.go('home');
			});

		}).catch(function(erro) {
			//se a resposta for erro devolve a mensagem
			$ionicPopup.alert({
				title: 'Erro no pedido!',
				template: erro.data + '. Liga pra gente: 011-1406'
			});
			//finaliza o carregamento
		}).finally(function(){
			$ionicLoading.hide();
		});
	};





});
/*
	



		

		
		
});*/