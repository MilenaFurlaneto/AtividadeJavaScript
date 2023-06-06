function Casa (cor, tamanho, bairro, preço) {
this.cor = cor,
this.tamanho = tamanho,
this.bairro =  bairro,
this.preço = preço;
}

casa = new Casa ('Rosa', '400x400', 'Jardim Paulista', ' 4.000.000');
console.table (casa);

casa = new Casa ('Azul', '300x400', 'Jardim Milena', ' 10.000.000');
console.table (casa);

casa = new Casa ('Amarela', '200x200', 'Itaim Paulista', '300.000');
console.table (casa);

casa = new Casa ('Roxo', '400x300', 'Brooklin', '3.000.000');
console.table (casa);
