console.log('hello!');
const icone = document.querySelector('i');
const titre = document.querySelector('h1');
icone.addEventListener('click', function () {
  if(titre.innerText === 'Titre'){
    titre.innerText = 'Titre modifié';
  }else{
    titre.innerText = 'Titre';
  }
  
});
