/* eslint-disable consistent-return */
/* eslint-disable no-undef */
const inputAltura = document.getElementById('altura');
const inputPeso = document.getElementById('peso');
const divBox = document.getElementById('box');
const textImc = document.createElement('h4');
const imcValue = document.createElement('h2');
const btn = document.getElementById('btn-calc');

const calcularImc = (altura, peso) => {
  const imc = peso / (altura * altura);
  return parseFloat(imc.toFixed(1));
};

const verificarImc = (altura, peso) => {
  const imc = calcularImc(altura, peso);
  imcValue.innerText = `Seu IMC: ${imc}`;
  divBox.append(imcValue);
  if (imc >= 30) {
    textImc.innerText = 'Você está acima do peso!';
    textImc.classList.add('text-center');
    return divBox.append(textImc);
  }
  if (imc >= 18 || imc === 24) {
    textImc.innerText = 'Seu peso está normal!';
    textImc.classList.add('text-center');
    return divBox.append(textImc);
  }
  if (imc < 18) {
    textImc.innerText = 'Você está abaixo do peso!';
    textImc.classList.add('text-center');
    return divBox.append(textImc);
  }
};

btn.addEventListener('click', () => {
  verificarImc(+inputAltura.value, +inputPeso.value);
});
