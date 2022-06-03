console.log('hello!');
const icone = document.querySelector('i');
const titre = document.querySelector('h1');
icone.addEventListener('click', function () {
  titre.innerText = 'testx';
});
