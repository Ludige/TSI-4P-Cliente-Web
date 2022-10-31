window.addEventListener("load", function (){
    let formCadastro = document.forms["Cadastrar"];
    let formEdicao = document.forms["Editar"];
    let formRemocao = document.forms["Remover"];
    let formListar = document.forms["Listar"];

    formCadastro.querySelector("#cadastrarBt").addEventListener("click",cadastrarUser);
    formCadastro.querySelector("#cancelar").addEventListener("click",cancelarCadastro);
    formEdicao.querySelector("#editarBt").addEventListener("click",editarUser);
    formEdicao.querySelector("#cancelar").addEventListener("click",cancelarEdicao);
    formRemocao.querySelector("#removerBt").addEventListener("click",removerUser);
    formRemocao.querySelector("#cancelar").addEventListener("click",cancelarRemocao);
    formListar.querySelector("#listarBt").addEventListener("click",listarUsers);

    //Blur
    formCadastro.nome.addEventListener("blur", ()=>validarNome("Cadastrar"));
    formCadastro.telefone.addEventListener("blur",  ()=>validarTelefone("Cadastrar"));
    formCadastro.email.addEventListener("blur",  ()=>validarEmail("Cadastrar"));
    formEdicao.id.addEventListener("blur", ()=>validarID("Editar"));
    formEdicao.nome.addEventListener("blur", ()=> validarNome("Editar"));
    formEdicao.telefone.addEventListener("blur", ()=>validarTelefone("Editar"));
    formEdicao.email.addEventListener("blur", ()=> validarEmail("Editar"));
    formRemocao.id.addEventListener("blur", ()=> validarID("Remover"));
});

//Final
function cadastrarUser(event){
    if(verificarCadastro(event)){
        event.preventDefault(); //Marcel, essa birosca n ta funcionando sem esse prevent default, entao vai ficar ai 
        let formCadastro = document.forms["Cadastrar"];

        let myHeaders = new Headers();

        myHeaders.append("Accept","application/json");
        myHeaders.append("Content-Type", "application/json");

        let myInit = {
            method: "POST",
            headers: myHeaders,
            mode: "cors",
            cache: "default",
            body: JSON.stringify({
                "nome": formCadastro.nome.value,
                "telefone":  formCadastro.telefone.value,
                "email":  formCadastro.email.value
            })
        }

        fetch(`http://45.63.105.67:8080/usuarios`,myInit)
        .then(response => {
            if(response.status != 201){
                return;
            }
            return response.json();
        })
        .then(function(){cancelarCadastro();}
        )
        .catch(error => {
            console.error("Erro: "+ error);
        })  
    }else{
        event.preventDefault();
    }
}

function editarUser(event){
    if(verificarEditar(event)){
        event.preventDefault();

        let formEdit = document.forms["Editar"];

        let myHeaders = new Headers();
        myHeaders.append("Accept","application/json");
        myHeaders.append("Content-Type", "application/json");


        let myInit = {
            method: "PUT",
            headers: myHeaders,
            mode: "cors",
            cache: "default",
            body: JSON.stringify({
                "id": `${formEdit.id.value}`,
                "nome": `${formEdit.nome.value}`,
                "telefone":  `${formEdit.telefone.value}`,
                "email":  `${formEdit.email.value}`
            })
        }

        fetch(`http://45.63.105.67:8080/usuarios`, myInit)
        .then(response => {
            if(response.status != 200){
                return;
            }
            return response.json();
        })
        .then(function(){cancelarEdicao();})
        .catch(error => {
            console.error("Erro: "+ error);
        })  
    }else{
        event.preventDefault();
    }
}

function removerUser(event){
    if(verificarRemover(event)){
        event.preventDefault();

        let formRemocao = document.forms["Remover"];

        let myHeaders = new Headers();
        myHeaders.append("Accept","application/json");
        myHeaders.append("Content-Type", "application/json");


        let myInit = {
            method: "DELETE",
            headers: myHeaders,
            mode: "cors",
            cache: "default",
            body: JSON.stringify({
                "id": `${formRemocao.id.value}`,
            })
        }

        fetch(`http://45.63.105.67:8080/usuarios/${formRemocao.id.value}`,myInit)
            .then(response => {
                if(response.status != 200){
                    return;
                }
                return response.json();
            })
            .then(function(){cancelarRemocao();})
            .catch(error => {
                console.error("Erro: "+ error);
        })  
    }else{
        event.preventDefault();
    }
}

function listarUsers(){
    fetch(`http://45.63.105.67:8080/usuarios`)
        .then(response => {
            if(response.status != 200){
                console.log("Erro ao Listar usarios");
                return;
            }
            return response.json();
        })
        .then(dados =>{
            document.querySelector("#listaP").innerHTML = null;

            for(let i = 0;i< parseInt(dados.length);i++){
                document.querySelector("#listaP").innerHTML += `Nome: ${dados[i].nome} / ID: ${dados[i].id} <br>`;
            }
            
        })
        .catch(error => {
            console.error("Erro: "+ error)
        })
}

//Verificar
function verificarCadastro(event){
    form = "Cadastrar";

    let invalidos = 0;

    if(!validarNome(form)){invalidos++;}
    if(!validarTelefone(form)){invalidos++;}
    if(!validarEmail(form)){invalidos++;}

    if(invalidos == 0){
        return true;
    }else{
        event.preventDefault();
        return false;
    }
}

function verificarEditar(event){
    form = "Editar";
    
    let invalidos = 0;
    
    if(!validarID(form)){invalidos++}
    if(!validarNome(form)){invalidos++}
    if(!validarTelefone(form)){invalidos++}
    if(!validarEmail(form)){invalidos++}

    if(invalidos == 0){
        return true;
    }else{
        event.preventDefault();
        return false;
    }
}

function verificarRemover(event){
    form = "Remover";

    if(validarID(form)){
        return true;
    }else{
        event.preventDefault();
        return false;
    }
}
//Cancelar
function cancelarCadastro(){
    let formCadastro = document.forms["Cadastrar"];

    formCadastro.nome.value = null;
    formCadastro.telefone.value = null;
    formCadastro.email.value = null;

    limpaValidacao(formCadastro.nome);
    limpaValidacao(formCadastro.telefone);
    limpaValidacao(formCadastro.email);
}

function cancelarEdicao(){
    let formEdicao = document.forms["Editar"];

    formEdicao.id.value = "";
    formEdicao.nome.value = "";
    formEdicao.telefone.value = "";
    formEdicao.email.value = "";

    limpaValidacao(formEdicao.id);
    limpaValidacao(formEdicao.nome);
    limpaValidacao(formEdicao.telefone);
    limpaValidacao(formEdicao.email);

}

function cancelarRemocao(){
    let formRemocao = document.forms["Remover"];

    formRemocao.id.value = "";

    limpaValidacao(formRemocao.id);
}

//Validar
function validarNome(form){
    let regexNome = /^(([a-zA-Z] ?){2,30})$/;

    let formNome = document.forms[`${form}`].nome;

    return validarRegex(regexNome,formNome);
    
}

function validarTelefone(form){
    let regexTelefone = /^(([\(]0?\d{2}[\)])|(0?\d{2}))?\s?9?\d{4}-?\d{4}$/;

    let formTel = document.forms[`${form}`].telefone;
    return validarRegex(regexTelefone,formTel);
}

function validarEmail(form){

    let regexEmail = /^([a-zA-Z]([a-zA-Z]|[0-9]|\-||_||.)+\@[a-zA-Z]{3,}\.(com|biz|io|me)(\.[a-zA-Z]{2,3})?)$/;
    
    let formEmail = document.forms[`${form}`].email;
    return validarRegex(regexEmail,formEmail);
}

function validarID(form){
    let regexID = /^([0-9]{1,})$/;
    
    let formID = document.forms[`${form}`].id;
    return validarRegex(regexID,formID);
}
//Regex
function validarRegex(regex,form){
    if(regex.test(form.value)){
        addSucesso(form);
        return true;
    }else{
        addErro(form);
        return false;
    }
}

//Css
function addSucesso(campo){
    campo.classList.remove("erro");
    campo.classList.add("sucesso");
}

function addErro(campo){
    campo.classList.remove("sucesso");
    campo.classList.add("erro");
}

function limpaValidacao(campo){
    campo.classList.remove("erro");
    campo.classList.remove("sucesso");
}