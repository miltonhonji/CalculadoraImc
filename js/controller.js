/*
 - Código do curo de Lógica: 04/09/2021
 - Programador: Igor Ribeiro
*/

var pacientes = [];
var botao = document.getElementById("calcular");
botao.addEventListener('click', function() { 
                                    var paciente = lePaciente();
                                    pacientes.push( paciente );
                                    mostraPaciente ( paciente );
                                });

var botaoRelatorio = document.getElementById("relatorio");
botaoRelatorio.addEventListener('click', function() {
                                            geraRelatorio( pacientes );
                                });

//console.log(nome);
//console.log(`Peso: ${peso} - Altura: ${altura}`);  //entre crase.
//console.log(`Calculo do IMC: ${imc.toFixed(2)}`);