// Lista interna donde guardamos los nombres agregados por el usuario.
const amigos = []

// Referencias a elementos donde capturamos los campos de entrada.
const inputNombre = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultadoSorteo = document.getElementById('resultado');

// Refrescamos el contenido de  la lista de amigos.
function actualizarLista() {
    listaAmigos.innerHTML = amigos
        .map((nombre) => `<li>${nombre}</li>`)
        .join('');
}



