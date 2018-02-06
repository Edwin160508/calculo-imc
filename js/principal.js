 //mudando texto dinamicamente diretamente
document.querySelector('.titulo_header').textContent="Aperecida Nutricionista"; //proriedade
document.querySelector('.subtitulo').textContent = "Meus Clientes";//proriedade

var paciente1 = document.querySelector('#primeiro_paciente'); // TR 
var pesoPaciente1 = paciente1.querySelector('.info-peso').textContent; //Reuso do seletor anterior para obter o valor do Peso
var alturaPaciente1 = paciente1.querySelector('.info-altura').textContent; //Reuso do seletor anterior para obter o valor da Altura

function calculoImc(peso, altura){
	let retorno = 0;	
	let pesoEhValido = true;
	let alturaEhValida = true;
	if(peso < 0 || peso > 1000){
		console.log('Peso inválido!');	    
		pesoEhValido = false;
	}
	if(altura < 0 || altura > 3.00){
		console.log('Altura inválida!');	    
		alturaEhValida = false;
	}
	if(pesoEhValido && alturaEhValida){
		retorno = peso / (altura*altura);
	}
	return retorno;
}

var imcPaciente1 = paciente1.querySelector('.info-imc'); //td imc
imcPaciente1.textContent = calculoImc(pesoPaciente1, alturaPaciente1);
