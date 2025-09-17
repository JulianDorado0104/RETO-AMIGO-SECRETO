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

// Borramos  cualquier resultado cuando agregamos nuevos nombres.
function limpiarResultado() {
    resultadoSorteo.innerHTML = '';
}

// validamos  que el campo de texto no este vacio.
function agregarAmigo() {
    const nombre = inputNombre.value.trim();

    if (!nombre) {
        alert('Por favor, ingresa un nombre valido.');
        return;
    }

    amigos.push(nombre);
    inputNombre.value = '';
    actualizarLista();
    limpiarResultado();
}


