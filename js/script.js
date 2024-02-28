new Vue ( {
    el: '#app',
    methods: {
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  });
    

    // Récupérer l'élément où afficher la date de dernière mise à jour
    var lastUpdatedElement = document.getElementById('last-updated');
    
    // Créer un objet Date pour la date actuelle
    var currentDate = new Date();
    
    // Formater la date actuelle
    var formattedDate = currentDate.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    // Mettre à jour le contenu de l'élément avec la date formatée
    lastUpdatedElement.textContent = 'Dernière mise à jour : ' + formattedDate;

  
  