const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// Actualizar el texto de los parrafos
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

// Lo que debemos manajear es como vamos a actualizar el color una vez que se cambian los indicadores, hata el momento no ocurre nada si se cambia el valor no se actucalizar el texto y no se actualiza el color de fondo

// funcionalidad para hacer quehaga los cambios al mover el indicador
function actualizarColor(){
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;

  document.body.style.backgroundColor = colorRGB;
}

// DEfinir para actualizar Red (Rojo)
inputRojo.addEventListener('change', (e) => {
  rojo = e.target.value;
  textoRojo.innerText = rojo;
  actualizarColor(rojo, verde, azul);

});

// Para actualizar Green (Verde)
inputVerde.addEventListener('change', (e) => {
  verde = e.target.value;
  textoVerde.innerText = verde;
  actualizarColor(rojo, verde, azul);
});

// Para actualizar Blue (Azul)
inputAzul.addEventListener('change', (e) => {
  azul = e.target.value;
  textoAzul.innerText = azul;
  actualizarColor(rojo, verde, azul);
});