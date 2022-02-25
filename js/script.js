var inputGanhoMes = document.querySelector('#ganho-mes');

var inputHorasDias = document.querySelector('#horas-dia');

var resultado = document.querySelector('#resposta');


function calcularValorHora(){
  
  var horasTrabalhadasMes = inputHorasDias.value * 22;
  
  var valorHora = inputGanhoMes.value / horasTrabalhadasMes;

  resultado.innerHTML = "R$" + valorHora.toFixed(2);
}
