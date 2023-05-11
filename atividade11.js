const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número: ", function(n1) {
  for (let i = 1; i <= 1000; i++) {
    if (n1 % i === 0) {
      console.log(`O número ${n1} é divisível por: ${i}`);
    }
  }
  rl.close();
});
