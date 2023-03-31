let numeroMagico = 0;
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", adivinar);

// 1 a 100
function getRandomNumber() {
  numeroMagico = Math.floor(Math.random() * (100 - 1) + 1);
  console.log(numeroMagico);
  return numeroMagico;
}

function adivinar(e) {
  e.preventDefault();
  let input = document.getElementById("input-enviar-numero");

  if (parseInt(input.value) === numeroMagico) {
    alert("GANASTE!");
  } else {
    if (parseInt(input.value) > numeroMagico) {
      alert("El numero magico es menor");
    }
    if (parseInt(input.value) < numeroMagico) {
      alert("El numero magico es mayor");
    }
  }
}
