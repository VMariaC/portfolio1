<script>
  function submitForm() {
    // Récupérer les valeurs des champs
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var message = document.getElementById('message').value;

    // Vérifier si les champs sont vides
    if (firstName === '' || lastName === '' || message === '') {
      // Afficher le message d'erreur
      document.getElementById('error-message').style.display = 'block';
    } else {
      // Créer un nouveau commentaire
      var newComment = document.createElement('div');
      newComment.className = 'flex space-x-4 text-sm text-gray-500';

      var commentContent = `
        <div class="flex-1 py-10">
          <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
          <div class="prose prose-sm mt-4 max-w-none text-gray-500">
            <p>${message}</p>
          </div>
        </div>
      `;

      newComment.innerHTML = commentContent;

      // Ajouter le nouveau commentaire à la liste existante
      document.getElementById('comment-list').appendChild(newComment);

      // Envoyer les données (vous pouvez ajouter ici la logique pour envoyer les commentaires)
      alert('Commentaire envoyé avec succès!');
      
      // Effacer le contenu des champs du formulaire
      document.getElementById('first-name').value = '';
      document.getElementById('last-name').value = '';
      document.getElementById('message').value = '';

      // Cacher le message d'erreur s'il était affiché
      document.getElementById('error-message').style.display = 'none';
    }
  }
</script>