const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite a área do círculo: ", function(d) {
  let resultado = Math.sqrt(d / Math.PI);
  console.log(`O raio do círculo é: ${resultado}`);
  rl.close();
});

