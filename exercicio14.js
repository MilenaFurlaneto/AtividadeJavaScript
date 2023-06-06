function Comida (nome, origem , ingredientes) {
    this.nome = nome,
    this.origem =  origem,
    this.ingredientes = ingredientes;
    }
    
   comida = new Comida ('Feijoada', 'Portuguesa', 'Feijão Preto, Linguiça, Carnes Variadas');
    console.table (comida);
    
    comida = new Comida ('Sushi', 'Japonesa', 'Arroz, Nori, Peixe Cru' ); 
    console.table (comida);
    
   comida = new Comida ('Coxinha', 'Brasileira', 'Frango desfiado, Massa');
    console.table (comida);
    
    comida = new Comida ('Pizza', 'Italiana', 'Massa, Recheios Variados');
    console.table (comida);