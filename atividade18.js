const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Qual é a sua idade? ", function(idade) {
  let dias = idade * 365;
  let semanas = idade * 52;

  console.log("Você viveu " + dias + " dias e " + semanas + " semanas até agora.");

  rl.close();
});
