const nome = "João"; // insira o nome aqui
const salario = 1400; // insira o salário aqui

let desconto;

if (salario > 1300) {
  desconto = salario * 0.15;
} else {
  desconto = salario * 0.10;
}

console.log(`O desconto de ${nome} é de R$${desconto.toFixed(2)}`);

