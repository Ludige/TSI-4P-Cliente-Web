window.addEventListener("load",function(){
    var nomeAluno = this.document.querySelector("#nome");
    var notaAluno = this.document.querySelector("#nota");
    var p = this.document.querySelector("#resultado")

    this.document.querySelector("#regis").addEventListener("click",function(){
        registrarAluno(p,nomeAluno,notaAluno);
    })
    this.document.querySelector("#abc").addEventListener("click",function(){
        mostrarAlfabetica(p);
    })
    this.document.querySelector("#decres").addEventListener("click",function(){
        mostrarDecrescente(p);
    })
    this.document.querySelector("#maiorNota").addEventListener("click",function(){
        mostrarMaiorNota(p);
    })
    this.document.querySelector("#mediaAlunos").addEventListener("click",function(){
        mostrarMedia(p);
    })
    this.document.querySelector("#aprov").addEventListener("click",function(){
        mostrarAprovados(p);
    })
})

class Alunos{
    constructor(nome, nota){
        this.nome = nome;
        this.nota = nota;
    }

}

let alunos = [];

function registrarAluno(p,nomeAluno, notaAluno){
    let aluno = new Alunos(nomeAluno.value, parseFloat(notaAluno.value));

    if(nomeAluno.value == ''){
        window.alert("Nome invalido");
    }else if(notaAluno.value == ''){
        window.alert("Nota invalida");
    }else{
        // console.log(nomeAluno.value, notaAluno.value);
        alunos.push(aluno);
        p.innerHTML = "Registro de Aluno: "+aluno.nome +" com Nota: "+ aluno.nota;
    }
}
    

function mostrarAlfabetica(p){
    if(alunos.length > 0){
        alunos.sort(function(a,b){//Organiza pelo nome
            if(a.nome == b.nome) return 0;
            if(a.nome > b.nome) return 1;
            if(a.nome < b.nome) return -1;
        });
        imprimirArray(p,alunos);
    }else{
        semAluno(p);
    }
    
}

function mostrarDecrescente(p){
    if(alunos.length > 0){
        alunos.sort(organizarDecres);
        imprimirArray(p,alunos);
    }else{
        semAluno(p);
    }
    
}

function mostrarMaiorNota(p){
    if(alunos.length > 0){
        alunos.sort(organizarDecres);
        //Faz com que o aluno com a maior nota seja obrigatoriamente a posição 0
   
        
        //metodo com filter e sort
        let maiores = alunos.filter(function(element,i){
            if(element.nota == alunos[0].nota){
                return element;
            }
        })

        //Metodo sem filter pra comparação
        // let maiores = [];
        // for(let i = 0;i < alunos.length;i++){
        //     //Compara se existem outros alunos que compartilham a maior nota
        //     if(alunos[i].nota == alunos[0].nota){
        //         maiores.push(alunos[i]);
        //     }
        // }
        
        imprimirArray(p,maiores);
    }else{
        semAluno(p);
    }
}

function mostrarMedia(p){
    let media = 0;

    if(alunos.length > 0){
        for(let i = 0; i < alunos.length; i++){
            media += alunos[i].nota;
        }
        media = media/alunos.length;
        p.innerHTML = `Media da Nota dos Alunos: ${parseFloat(media)}`;
    }else{
        semAluno(p);
    }
}

function mostrarAprovados(p){
    if(alunos.length > 0){
        let aprovados = alunos.filter(function(element,i){
            if(element.nota >= 6){
                return true;
            }
        })
        if(aprovados){
            imprimirArray(p,aprovados);
        }else{
            p.innerHTML = `Nenhum aluno aprovado, se liga em`;
        }
    }else{
        semAluno(p);
    }
}

//fuções auxiliares 
function imprimirArray(p, array){
    p.innerHTML = null;//limpa o p


    for(let i = 0;i < array.length;i++){
        p.innerHTML += `Aluno: ${array[i].nome} com Nota: ${array[i].nota}<br>`
    }
}

function organizarDecres(a,b){
    if(a.nota == b.notaAluno) return 0;
    if(a.nota > b.nota) return -1;
    if(a.nota < b.nota) return 1;
}

function semAluno(p){
    p.innerHTML = `Nenhum Aluno registrado.`;
}