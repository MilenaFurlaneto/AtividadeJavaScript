const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite a temperatura em Celsius: ', (temperatura) => {
  if (temperatura < 18) {
    console.log('Clima frio');
  } else if (temperatura < 23) {
    console.log('Clima agradável');
  } else {
    console.log('Clima quente');
  }
  
  rl.close();
});

