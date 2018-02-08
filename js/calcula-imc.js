 //mudando texto dinamicamente diretamente
document.querySelector('.titulo_header').textContent="Aperecida Nutricionista"; //proriedade
document.querySelector('.subtitulo').textContent = "Meus Clientes";//proriedade

var pacientes = document.querySelectorAll('.paciente'); // TR 


function calculoImc(peso, altura){
	let retorno = 0;	
	let pesoEhValido = true;
	let alturaEhValida = true;
	if(peso <= 0 || peso >= 1000){
		console.log('Peso inválido!');	    
		pesoEhValido = false;
		retorno = 'Peso inválido!';
	}
	if(altura <= 0 || altura >= 3.00){
		console.log('Altura inválida!');	    
		alturaEhValida = false;
		retorno = 'Altura inválida!';
	}
	if(pesoEhValido && alturaEhValida){
		retorno = peso / (altura*altura);
		retorno = retorno.toFixed(2);//deixando apenas 2 casas decimais
	}
	
	return retorno;
}


//Setando valores do IMC em todos os pacientes na tabela
for(var i =0; i< pacientes.length; i++){
	let peso = pacientes[i].querySelector('.info-peso').textContent;
	let altura = pacientes[i].querySelector('.info-altura').textContent;
	let imc = pacientes[i].querySelector('.info-imc');
	imc.textContent = calculoImc(peso, altura);
	//pitando fonte em vermelho caso 'imc' for 0 siguinificando que 'Altura' ou 'Peso' estão inválidos.
	if(imc.textContent === 'Peso inválido!' || imc.textContent === 'Altura inválida!'){
		pacientes[i].classList.add('paciente-invalido');
	}
}
