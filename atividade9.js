const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Escreve seu nome: ", function(nome) {
  rl.question("Escreva sua idade: ", function(idade) {
    if (idade > 18) {
      console.log("Voce e maior de idade");
    } else {
      console.log("Voce e menor de idade");
    }
    rl.close();
  });
});
