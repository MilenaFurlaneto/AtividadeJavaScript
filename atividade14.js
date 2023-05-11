const taxaReais = 5.20;
const taxaEuros = 0.85;
const taxaIenes = 109.34;
const taxaPesosMexicanos = 20.24;
const taxaDolaresAustralianos = 1.30;

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o valor em dólares: ", function(valorDolar) {
  let valorReais = valorDolar * 5.4;
  let valorEuros = valorDolar * 0.9;
  let valorIenes = valorDolar * 134.18;
  let valorPesosMexicanos = valorDolar * 17.5;
  let valorDolaresAustralianos = valorDolar * 1.45;
  
  console.log(`Valor em Reais: R$ ${valorReais.toFixed(2)}`);
  console.log(`Valor em Euros: € ${valorEuros.toFixed(2)}`);
  console.log(`Valor em Ienes: ¥ ${valorIenes.toFixed(2)}`);
  console.log(`Valor em Pesos Mexicanos: $ ${valorPesosMexicanos.toFixed(2)}`);
  console.log(`Valor em Dólares Australianos: AU$ ${valorDolaresAustralianos.toFixed(2)}`);
  
  rl.close();
});
