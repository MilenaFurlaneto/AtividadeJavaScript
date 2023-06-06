function Pessoa (nome, datadenascimento , sexo, localdenascimento, menordeidade ) {
    this.nome = nome,
    this.datadenascimento = datadenascimento,
    this.sexo =  sexo,
    this.localdenascimento = localdenascimento,
    this.menordeidade = menordeidade;
    }
    
   pessoa = new Pessoa ('Milena', '28/03/2006', 'Feminino', 'São Paulo', 'Sim');
    console.table (pessoa);
    
   pessoa = new Pessoa ('Manuella', '26/04/2016', 'Feminino', 'São Paulo', 'Sim'); 
    console.table (pessoa);
    
    pessoa = new Pessoa ('Guilherme', '05/11/2009', 'Masculino', 'São Paulo', 'Sim');
    console.table (pessoa);
    
    pessoa = new Pessoa ('Débora', '18/05/1976', 'Feminino', 'São Paulo', 'Não');
    console.table (pessoa);