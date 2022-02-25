var inputValorHora = document.querySelector('#valor-hora');

var inputHorasProjeto = document.querySelector('#horas-projeto');

var resultado = document.querySelector('#resposta');


function calcular(){

  var valorTotalProjeto = inputValorHora.valueAsNumber * inputHorasProjeto.valueAsNumber;

  resultado.innerHTML = "R$" + valorTotalProjeto.toFixed(2);
}