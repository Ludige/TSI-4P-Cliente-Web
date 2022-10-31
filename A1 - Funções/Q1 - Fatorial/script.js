    window.addEventListener("load",function(){
        var num = document.querySelector("#texto");
        var p = this.document.querySelector("#resultado");
        this.document.querySelector("#botao").addEventListener("click",function(){
            calcFatorial(num.value, p);
        });
    });

    function calcFatorial(numero, p){
        let result = 1;
        for(var i = parseInt(numero); i > 0; i--){
            if(result == "Infinity") break;
            result *= i;
        }
        p.innerHTML = "Resultado: "+result;
    }