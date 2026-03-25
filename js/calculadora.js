$(document).ready(function () {
    $("#calcular").click(function () {
        let n1 = parseFloat($("#n1").val());
        let n2 = parseFloat($("#n2").val());
        let operacao = $("input[name='operacao']:checked").val();
        let resultado = calcular(n1, n2, operacao);

        $("#resultado").html("Resultado: " + resultado);
    });
});

function limpar() {
    $("#n1").val("");
    $("#n1").focus();
    $("#n2").val("");
    $("input[name='operacao']").prop("checked", false);
    $("#resultado").html("Resultado: ");
}

function calcular(n1, n2, operacao) {
    let resultado = 0;

    if (operacao == "soma") {
        resultado = n1 + n2;
    } else if (operacao == "sub") {
        resultado = n1 - n2;
    } else if (operacao == "mult") {
        resultado = n1 * n2;
    } else if (operacao == "div") {
        resultado = n1 / n2;
    }
    else if(operacao == "ioup") {
        if(resultado = n1%2){
            resultado = "O valor 1 é impar ";
        }
            else{
                resultado = "O valor 1 é par ";
        }
    }
    else if(operacao == "noup") {
        if(n1 >= 0){
            resultado = "O valor 1 é posivo ";
        }
            else {
                resultado = "O valor 1 é negativo ";
            }
    }
    


    return resultado;

}
