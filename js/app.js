let numeroMagico = 0;
const intentos = 3;
let intentosRestantes = intentos;
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", adivinar);

// 1 a 10
function getRandomNumber() {
  numeroMagico = Math.floor(Math.random() * (11 - 1) + 1);
  console.log(numeroMagico);
  return numeroMagico;
}

function adivinar(e) {
  e.preventDefault();
  let input = document.getElementById("input-enviar-numero");

  if(parseInt(input.value) >=1 && parseInt(input.value)<=10){
    if (parseInt(input.value) === numeroMagico) {
      alert("GANASTE!");
    } else {
      intentosRestantes--;
      if (parseInt(input.value) > numeroMagico) {
        alert("El numero magico es menor");
      }
      if (parseInt(input.value) < numeroMagico) {
        alert("El numero magico es mayor");
      }
      if (intentosRestantes === 0) {
        alert("Perdiste. El número mágico era " + numeroMagico);
        intentosRestantes = intentos;
      }
      pIntentos.innerHTML = `Intentos restantes: ${intentosRestantes}`;
    }
  }
  else{
    alert(`Por favor ingrese un numero entre 1 y 10`);
  }
  input.value = "";
  
}

let buttonComenzar = document.getElementById("buttonComenzar");
let pIntentos = document.getElementById("pIntentos");

buttonComenzar.addEventListener("click", function() {
  pIntentos.innerHTML = `Intentos restantes : ${intentosRestantes}`;
});