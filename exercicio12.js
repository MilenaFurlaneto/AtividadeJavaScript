function Time (nome, pontuação, status) {
    this.nome = nome,
    this.pontuação = pontuação,
    this.status =  status;
    }
    
    time = new Time ('Milena', '4.000', 'Classificada');
    console.table (time);
    
   time = new Time ('Manuella', '4.000', 'Classificada');
    console.table (time);
    
    time = new Time ('João', '500', 'Eliminado');
    console.table (time);
    
    time = new Time ('Marcos', '1.500', 'Eliminado');
    console.table (time);