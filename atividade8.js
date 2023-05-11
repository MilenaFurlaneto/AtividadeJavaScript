const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Escreva um numero: ", function(nl) {
  rl.question("Escreva outro numero: ", function(n2) {
    rl.question("Escreva outro numero: ", function(n3) {
      const n4 = (n2 * n3) / nl;
      console.log(`N2 x N3 / Nl = ${n4}`);
      rl.close();
    });
  });
});
