const montoInput = document.getElementById("monto");
const personasInput = document.getElementById("personas");
const propinaInput = document.getElementById("propina");

const botonCalcular = document.getElementById("calcular");

const resultado = document.getElementById("resultado");

botonCalcular.addEventListener("click", function () {

  // convertir texto a numero
  const monto = parseFloat(montoInput.value);

  const personas = parseFloat(personasInput.value);

  const propina = parseFloat(propinaInput.value);

  // validaciones
  if (monto <= 0 || personas < 1) {

    resultado.textContent = "Datos inválidos";

    return;
  }
  if (montoInput.value === "" || personasInput.value === "") {

    resultado.textContent = "Colocar datos del pago";

    return;
  }

  // calcular total con propina
  const totalConPropina = monto + (monto * propina / 100);

  // dividir entre personas
  const totalPorPersona = totalConPropina / personas;

  // mostrar resultado
  resultado.textContent =
    `Cada persona paga: $${totalPorPersona.toFixed(2)}`;

});