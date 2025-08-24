// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// 1) Array para almacenar los nombres
let amigos = [];

// 2) Referencias a elementos del DOM (para no buscarlos cada vez)
const input    = document.getElementById('amigo');
const lista    = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// 3) Actualizar la lista en pantalla
function actualizarLista() {
  // 3.1 Limpiar la lista existente
  lista.innerHTML = "";

  // 3.2 Recorrer el arreglo 'amigos' y crear <li> por cada nombre
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// 4) Agregar un amigo (desde el input)
function agregarAmigo() {
  // 4.1 Capturar el valor del campo de texto
  const nombre = input.value.trim();

  // 4.2 Validar la entrada
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    input.focus();
    return;
  }

  // (Opcional) Evitar duplicados sencillos
  if (amigos.includes(nombre)) {
    alert("Ese nombre ya fue agregado.");
    input.select();
    return;
  }

  // 4.3 Actualizar el array
  amigos.push(nombre);

  // 4.4 Limpiar el campo de entrada
  input.value = "";

  // 4.5 Refrescar la lista en pantalla y limpiar un sorteo previo
  actualizarLista();
  resultado.textContent = "";
}

// 5) Sortear un amigo al azar y mostrarlo
function sortearAmigo() {
  // 5.1 Validar que haya elementos
  if (amigos.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }

  // 5.2 Generar índice aleatorio
  const indice = Math.floor(Math.random() * amigos.length);

  // 5.3 Obtener el nombre sorteado
  const ganador = amigos[indice];

  // 5.4 Mostrar resultado
  resultado.innerHTML = `🎉 Amigo secreto: <strong>${ganador}</strong>`;
}

// (Extra de usabilidad) Permitir Enter para agregar
if (input) {
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') agregarAmigo();
  });
}
