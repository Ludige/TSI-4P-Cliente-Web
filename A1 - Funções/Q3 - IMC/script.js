let altura = this.document.querySelector("#altura");
let peso = this.document.querySelector("#peso");

let textoIndice = this.document.querySelector("#textoIndice");

this.document.querySelector("#botao").addEventListener("click",function(){
    calcularIMC(altura.value,peso.value,textoIndice);
});

function calcularIMC(altura, peso,p){
    let calculo;
    let indices = ["Abaixo do peso","Peso Ideal","Levemente acima do peso",
    "Obesidade Grau 1","Obesidade Grau 2 (severa)","Obesidade Grau 3(mórbida)"];
    calculo = peso/(altura * altura);
    if(calculo < 18.6){
        p.innerHTML = "Seu Resultado: "+ indices[0]
    }else if(calculo >= 18.6 && calculo < 25){
        p.innerHTML = "Seu Resultado: "+ indices[1]
    }else if(calculo >= 25 && calculo < 30){
        p.innerHTML = "Seu Resultado: "+ indices[2]
    }else if(calculo >= 30 && calculo < 35){
        p.innerHTML = "Seu Resultado: "+ indices[3]
    }else if(calculo >= 35 && calculo < 40){
        p.innerHTML = "Seu Resultado: "+ indices[4]
    }else if(calculo >= 40){
        p.innerHTML = "Seu Resultado: "+ indices[5]
    }
    
}