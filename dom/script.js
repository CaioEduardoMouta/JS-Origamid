window.alert('Lorem Ipsum');

if(href === 'http://127.0.0.1:5500/dom/') {
    console.log('É igual');
}

const h1Selecionado = document.querySelector('h1');

const h1Classes = h1Selecionado.classList();

function callback() {
    console.log('Clicou em', h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', callback)