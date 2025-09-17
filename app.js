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

// Selecciona aleatoriamente un nombre de la lista y lo muestra en pantalla.
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Agrega al menos un nombre antes de sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const nombreSeleccionado = amigos[indiceAleatorio];

    resultadoSorteo.innerHTML = `<li>El amigo secreto es: ${nombreSeleccionado}</li>`;
}


