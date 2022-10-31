window.addEventListener("load",function(){

    let data = this.document.querySelector("#data");
    let p = this.document.querySelector("#extenso");

    this.document.querySelector("#botao").addEventListener("click",function(){
        let dataArray = [];//intanciar array
        let arrayAuxiliar = data.value.split("-");//quebra no -
        for(let i = 0; i < arrayAuxiliar.length ;i++){
            dataArray.push(arrayAuxiliar[i]);//push == add do java
        }
        porExtenso(dataArray,p);
    })
});

function porExtenso(dataArray,p){
    let mes = parseInt(dataArray[1]);//posição 1 (o mes)
    let meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
    p.innerHTML = dataArray[2]+" de "+ meses[mes - 1] +" de "+ dataArray[0];
}