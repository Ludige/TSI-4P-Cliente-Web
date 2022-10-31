window.addEventListener("load",function(){
    let formulario = document.forms["cadastro"];

    formulario.nome.addEventListener("blur", validarNome);
    formulario.idade.addEventListener("blur", validarIdade);
    formulario.data.addEventListener("blur", validarData);
    formulario.cpf.addEventListener("blur", validarCpf);
    formulario.email.addEventListener("blur", validarEmail);
    formulario.fone.addEventListener("blur", validarTelefone);

    for(let i = 0; i < formulario.idioma.length; i++){
        formulario.idioma[i].addEventListener("change", validarIdioma);
    }

    formulario.estados.addEventListener("blur", validarEstado);
    formulario.cidades.addEventListener("blur", validarCidade);


    formulario.addEventListener("submit", validar);
});

function validar(event){
    let invalidos = 0;
    if(!validarNome())invalidos++
    if(!validarIdade())invalidos++
    if(!validarData())invalidos++
    if(!validarCpf())invalidos++
    if(!validarEmail())invalidos++
    if(!validarTelefone())invalidos++
    if(!validarSexo())invalidos++
    if(!validarIdioma())invalidos++
    if(!validarEstado())invalidos++
    if(!validarCidade()) invalidos++

    if(invalidos == 0){
        return true;
    }else{
        event.preventDefault();
        return false;
    }
}

function validarNome(){
    let formNome = document.forms["cadastro"].nome;
    let regexNome = /^(([a-zA-Z] ?){2,30})$/

    validarRegex(regexNome,formNome);
}

function validarIdade(){
    let formIdade = document.forms["cadastro"].idade;
    let regexIdade = /^(1[8-9]|[2-9][0-9]|10[0-9]|110)$/

    validarRegex(regexIdade,formIdade);

}

function validarData(){
    let formData = document.forms["cadastro"].data;
    // (\-?|\ ?|\/?) -> mesmo usando o type date
    //  se o usuario estiver num browser mais antigo ainda tem 3 opções de separação
    let regexData = /^((19[1-9][0-9]|200[0-3])(\-?|\ ?|\/?)(0?[1-9]|1[0-2])(\-?|\ ?|\/?)(0?[1-9]|[1-2][0-9]|30|31))$/

    validarRegex(regexData,formData);
}

function validarCpf(){
    let formCpf = document.forms["cadastro"].cpf;
    let regexCpf = /^((\d{3}\.?){2}\d{3}-?\d{2}|\d{2}\.?\d{3}\.?\d{3}(\/?| ?)\d{4}\-?\d{2})$/
    
    validarRegex(regexCpf,formCpf);
}

function validarEmail(){
    let formEmail = document.forms["cadastro"].email;
    let regexEmail = /^([a-zA-Z]([a-zA-Z]|[0-9]|\-||_||.)+\@[a-zA-Z]{1,3}\.(com|biz|io|me)(\.[a-zA-Z]{2})?)$/

    validarRegex(regexEmail,formEmail);
}

function validarTelefone(){
    let formTel = document.forms["cadastro"].fone;
    let regexTel = /^(([\(]0?\d{2}[\)])|(0?\d{2}))?\s?9?\d{4}-?\d{4}$/

    validarRegex(regexTel, formTel);
}


function validarIdioma(){
    let idiomas = document.forms["cadastro"].idioma;
    let qtdIdiomas = 0;
    let divIdiomas = document.querySelector("#idiomas");

    for(let i = 0;i < idiomas.length;i++){
        if(idiomas[i].checked){
            qtdIdiomas++;
        }
    }

    if(qtdIdiomas >= 2){
        divIdiomas.classList.remove("erroB");
        divIdiomas.classList.add("sucessoB");
        return true;
    }else if(qtdIdiomas == 0){
        divIdiomas.classList.remove("erroB");
        divIdiomas.classList.remove("sucessoB");
        return false
    }else{
        divIdiomas.classList.remove("sucessoB");
        divIdiomas.classList.add("erroB");
        return false;
    }
}

function validarSexo(){
    let formSexo = document.forms["cadastro"].sexo;
    let divSexo = document.querySelector("#sexo");

    if(formSexo.value != ""){
        divSexo.classList.remove("erroB");
        divSexo.classList.add("sucessoB");
        return true;
    }else{
        divSexo.classList.remove("sucessoB");
        divSexo.classList.add("erroB");
        return false;
    }
}

function validarEstado(){
    let formEstados = document.forms["cadastro"].estados;
    validarSelect(formEstados);
}

function validarCidade(){
    let formCidade = document.forms["cadastro"].cidades;
    validarSelect(formCidade);
}

function validarSelect(form){
    let opcao = form.selectedIndex;
    if(opcao == 0){
        addErro(form);
        return false;
    }else{
        addSucesso(form);
        return true;
    }
}

function addSucesso(campo){
    campo.classList.remove("erro");
    campo.classList.add("sucesso");
}

function addErro(campo){
    campo.classList.remove("sucesso");
    campo.classList.add("erro");
}

function validarRegex(regex,form){
    let textoValido = form.value;
    if(regex.test(textoValido)){
        addSucesso(form);
        return true;
    }else{
        addErro(form);
        return false;
    }
}
