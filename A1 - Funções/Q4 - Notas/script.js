let dinheiro = this.document.querySelector("#dinheiro");
let p = this.document.querySelector("#textoIndice");

this.document.querySelector("#botao").addEventListener("click",function(){
    sortNotas(parseInt(dinheiro.value), p)
});

function sortNotas(dinheiro,p){// qual a palavra em portugues pra sort????
    let qtdCinquenta = 0;
    let qtdDez = 0;
    let qtdCinco = 0;
    let qtdUm = 0;

    while(dinheiro > 0){
        if(dinheiro >= 50){
            dinheiro -= 50;
            qtdCinquenta++;
        }else if(dinheiro >= 10){
            dinheiro -= 10;
            qtdDez++;
        }else if(dinheiro >= 5){
            dinheiro -= 5;
            qtdCinco++;
        }else if(dinheiro >= 1){
            dinheiro -= 1;
            qtdUm++;
        }
    
    p.innerHTML = "Notas de 50: "+qtdCinquenta + 
                "\n Notas de 10: "+qtdDez +
                "\n Notas de 5: "+qtdCinco + 
                "\n Notas de 1: "+qtdUm;
    }
}