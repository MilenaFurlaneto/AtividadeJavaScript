function Carro (nome, marca, lançamento, preço) {
    this.nome = nome,
    this.marca = marca,
    this.lançamento = lançamento,
    this.preço = preço;
    }
    
   carro = new Carro ('Audi A6 E-tron', 'Audi', '2023', '370.000');
    console.table (carro);
    
   carro = new Carro ('Aston Martin db9', 'Aston Martin', '2014', '839.000'); 
    console.table (carro);
    
    carro = new Carro ('Tesla Model X', 'Tesla', '2023', '1.000.000');
    console.table (carro);
    
    carro = new Carro ('Bugatti La Voiture Noire', 'Bugatti',  '2019',  '100.000.000');
    console.table (carro);