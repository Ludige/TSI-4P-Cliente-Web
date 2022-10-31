window.onload = buscarCookie();

window.addEventListener("load",function(){
        let formulario = document.forms["login"];
    
        formulario.nome.addEventListener("blur", validarNome);
        formulario.senha.addEventListener("blur", validarSenha);
    
        formulario.addEventListener("submit", validarLogin);
})

let formulario = this.document.forms["login"];

function validarLogin(){
    let nome = document.forms["login"].nome.value;
    let senha = document.forms["login"].senha.value;

    if(validarNome(nome) && validarSenha(senha)){
        criarCookie(nome, senha);
        return true;
        buscarCookie;
    }else{
        event.preventDefault();
        return false;
    }
}

function criarCookie(nome,senha){
    let dataFinal = new Date();
    dataFinal.setDate(dataFinal.getDate() +2); 
    
    addCookie(nome, senha, dataFinal);
}   

function addCookie(chave, valor, dataFinal){
    // seria certo usar o nome e a senha como os dados do cookie?
    // ou deveria fazer dados separados?

    let cookie = `${chave}=${valor};expires=${dataFinal.toUTCString()}`;
    document.cookie = cookie;
}

function buscarCookie(){//ta com um monte de anotação pq eu tava tentando entender
    //vai buscar o cookie com a chave senha123 a unica passivel de ser criada NESSE codigo
    let cookies = document.cookie;
    //fez o vetor com todos os cookies
    let vetorCookies = cookies.split("; ");

    for(let i = 0; i < vetorCookies.length; i++){
        //separa o vetor
        let vetorCookieUnico = vetorCookies[i].split("=");
        if(vetorCookieUnico[1]=="senha123"){//posição 1 pra cada i
            document.location = "https://www.google.com";
            return true;
        }else{
            return false;
        }
    }
}

function erro(campo){
    campo.classList.remove("sucesso");
    campo.classList.add("erro");
}

function sucesso(campo){
    campo.classList.remove("erro");
    campo.classList.add("sucesso");
}

function validarNome(){
    let nome = formulario.nome;
    if(nome.value == "login"){
        sucesso(nome);
        return true;
    }else{
        erro(nome);
        return false;
    }
}

function validarSenha(){
    let senha = formulario.senha;
    if(senha.value == "senha123"){
        sucesso(senha);
        return true;
    }else{
        erro(senha);
        return false;
    }
}