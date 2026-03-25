$(document).ready(function () {
    $("#calcular").click(function () {
        let altura = parseFloat($("#altura").val());
        let peso = parseFloat($("#peso").val());
        let resultado = calcular(altura, peso);
        $("#resultado").html("Resultado: " + resultado);
    });
});

function limpar() {
    $("#altura").val("");
    $("#peso").focus();
    $("#peso").val("");
    $("#resultado").html("Resultado: ");
}

function calcular(  peso, altura, resultado) { 
    imc = 0
    imc = altura / (peso*peso);
if(imc <= 19){
    resultado = ("O seu IMC é: ") + imc + (" você está abaixo do peso ideal");
}
else if(imc > 19 && imc <= 25){
    resultado = "O seu IMC é: " + imc + " você está no peso ideal";
}
else if(imc > 25 && imc <= 30){
    resultado = "O seu IMC é: " + imc + " você está sobre peso"; 
 }
 else if(imc > 30){
    resultado = "O seu IMC é: " + imc + " você está com obesidade"; 
 }
    return resultado;
}