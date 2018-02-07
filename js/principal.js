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
		//pacientes[i].style.backgroundColor = 'lightcoral';
		pacientes[i].classList.add('paciente-invalido');
	}
}

/*Adicionar Dados do formulário na tabela*/
document.querySelector('#adicionar-paciente').addEventListener('click', function(event){
	event.preventDefault();
	let nome = document.querySelector('#nome').value;
	let peso = document.querySelector('#peso').value;
	let altura = document.querySelector('#altura').value;
	let gordura = document.querySelector('#gordura').value;
	montarHtmlDadosFormulario(nome, peso, altura, gordura);	
});

function montarHtmlDadosFormulario(nome, peso, altura, gordura){
	let tabelaPacientes = document.querySelector('#tabela-pacientes');
	/*Criando TR*/
	let pacienteTr = document.createElement('tr');

	/*Criando TD*/
	let nomeTd = document.createElement('td');
	let pesoTd = document.createElement('td');
	let alturaTd = document.createElement('td');
	let gorduraTd = document.createElement('td');
	let imcTd = document.createElement('td');

	/*Setando valores vindos do formulario em cada TD*/
	nomeTd.textContent = nome;
	pesoTd.textContent = peso;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura;
	imcTd.textContent = calculoImc(peso, altura);

	/*Adicionando TDs como filhas da TR*/
	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);
	
	/*Adicionando TR totalmente preenchida na tbody '#tabela-pacientes'*/
	tabelaPacientes.appendChild(pacienteTr);
}
