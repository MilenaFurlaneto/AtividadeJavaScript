readline = require ('readline');

leitor = readline.createInterface ({
    input:process.stdin,
    output:process.stdout
});

leitor.question ("Digite n1: ", function (num1){
    n1 = parseInt (num1);
    leitor.question ("Digite n2: ", function (num2){
        n2 = parseInt(num2);
        leitor.question ("Digite n3: ", function (num3){
            num3 = parseInt (num3);
            s = [n1, n2, n3];
            console.log (s);
            leitor.close ();
        })
    })
})

    

    
