const calcular = document.getElementById('calcular');
calcular.onclick = imc;

// testar depois com query.element
const nome = document.getElementById('nome');
const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const resultado = document.getElementById('resultado');
// IMC É calculado dividindo o peso (em kg) pela altura ao quadrado (em metros).

// divide peso by altura squared
function imc() {
    const peso1 = parseFloat(peso.value);
    const altura1 = parseFloat(altura.value);
    const imc = peso1 / (altura1 * altura1);
    resultado.textContent = imc;
}
