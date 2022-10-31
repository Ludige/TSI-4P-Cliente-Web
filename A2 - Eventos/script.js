div = this.document.querySelectorAll("div");

window.addEventListener("load",function(){
    for(let i = 0; i < div.length; i++){
        div[i].addEventListener("click",trocarCor);
    }
})

function gerarRandom(numero){
    return Math.floor(Math.random() *(numero + 1));
}

function trocarCor(){
let color ="rgb("+gerarRandom(255)+","+gerarRandom(255)+","+gerarRandom(255)+")"; 
this.style.backgroundColor = color;
}