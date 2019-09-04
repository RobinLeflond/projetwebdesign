
(function(){
	angular.module('store',[]); //déclaration du module angular
})();

(function(){
	angular.module('store')
	.filter('renommerRarete',function(){ //personnalisation d'un filtre pour enlever les caractères qui ne doivent pas apparaître à la l'affichage(les caractères utilisés pour le tri par rareté)
		return function(input){

			if(!input)return 0;

			
			//remplacement en fonction de la chaine de caractère en entrée
			switch (input) {
				
				case 'Commune':
				break;
  
				case '+Inhabituelle+':
				input='Inhabituelle';
				break;
  
				case '++Rare++':
				input='Rare';
				break;
 
				case '*Epique*':
				input='Epique';
				break;
  
				case '**Légendaire**':
				input='Légendaire';
				break;

				default:
				break;
    
			}				
			return input;
			
		};
	});
})();

(function(){
	angular.module('store')
	.controller('storeController',['$http',function($http){
		
		this.selectedTab=1;
		this.selectTab=function(id){ //fonction de selection des onglets
		this.selectedTab=id;
		};
		
		var _this=this;
		this.list=[];
		
		this.searchlist={ //variable modifiée lors d'une recherche dans la barre de recherche
			Arme : ""
		};
		
		this.vueimage=true; //initialisation de la variable contrôlant l'affichage des bouttons de gestion des images dans la liste des favoris
		this.ImageOff=function(Boolean){ //Fonction de modification de la variable ci-dessus (appelée lorsquel'on appuie sur un des bouttons de gestion des images) 
			this.vueimage=Boolean;
		};
	
		$http.get('./data/data.json') //Appelle les données présentes dans le fichier data
			.success(function(data){
				_this.list=data;
			});
			
			this.infoList=[];
			
		this.ajoutFavoris=function(arme,rarete,degat,hs,tirsparseconde,dps,tailleduchargeur,tempsderechargement,Picture){ //Ajout d'une arme à la liste des favoris
		
		//création de l'arme
		this.infos={
					Arme:arme,
					Rarete:rarete,
					Degat:degat,
					HS:hs,
					Tirsparseconde:tirsparseconde,
					DPS:dps,
					Tailleduchargeur:tailleduchargeur,
					Tempsderechargement:tempsderechargement,
					picture : Picture,
				};
		this.infoList.push(this.infos); //ajout de l'arme dans la liste
		
			};
			
		this.supprimerFavoris=function(index){ //Fonction de suppression d'une arme à la liste des favoris
				
		this.infoList.splice(index, 1);		//supprime un élément (une arme) à partir de l'index de celle-ci	
			};
			
	}]);
})();
		

























