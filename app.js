// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; 

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if (nombreAmigo) {
        amigos.push(nombreAmigo);
        actualizarListaAmigos(); 
        inputAmigo.value = ''; 
    } else {
        alert('Por favor, escribe el nombre de un amigo.');
    }
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) {
        const nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = amigos[i];
        listaAmigos.appendChild(nuevoAmigo);
    }
}

function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert('No hay amigos en la lista. Agrega al menos uno.');
        return;
    }

    const resultado = document.getElementById('resultado');
    const listaAmigos = document.getElementById('listaAmigos');

    
    resultado.innerHTML = '';

    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    
    const amigoSorteado = amigos[indiceAleatorio];

    
    resultado.innerHTML = `¡El amigo sorteado es: <strong>${amigoSorteado}</strong>!`;

    
    listaAmigos.innerHTML = '';

    
    amigos = [];
}