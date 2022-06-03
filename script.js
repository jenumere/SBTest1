console.log('hello!');
const icone = document.querySelector('i');
const titre = document.querySelector('h1');
const lien = document.querySelector('a');
console.log(lien);
icone.addEventListener('click', function () {
  console.log('icone cliqué');
  icone.classList.toggle('fa-smile');
  if (titre.innerText === 'Titre') {
    titre.innerText = 'Titre modifié';
    lien.classList.toggle('lien_masque');
    icone.classList.toggle('icone_rouge');
  } else {
    titre.innerText = 'Titre';
    lien.classList.toggle('lien_masque');
    icone.classList.toggle('icone_rouge');
  }
});
