
var form = document.querySelector('#form-adciona');
var mensagensErros= document.querySelector('#mensagens-erro');
/*Click do botao Adicionar Dados do formulário na tabela*/
document.querySelector('#adicionar-paciente').addEventListener('click', function(event){
	event.preventDefault();	
	let pacienteFormulario = obterPacienteFormulario(form);
	let erro = validaPaciente(pacienteFormulario);

	/*Se maior que zero ocorreu algum erro */
	if(erro.length > 0){ 
		exibeMensagensErro(erro);
		return;
	}
	
	montaTrAdicionaATabela(pacienteFormulario);	
	form.reset();
	mensagensErros.textContent = '';
});

/*Comportamentos de tela do form*/
/*Campo Peso */
campoApenasNumeros(form.peso);
/*Campo Altura */
campoApenasNumeros(form.altura);
/*Campo Gordura */
campoApenasNumeros(form.gordura);
function campoApenasNumeros(campo){
	campo.addEventListener('keyup', function(event){
		var reg = /^\d+$/;		
		if(!reg.test(campo.value)){							
			campo.value = campo.value.replace(/^\d+.\d{8}$/, "");
		}
	
	});
}

/*Fim Comportamentos de tela do form*/


function obterPacienteFormulario(form){
	let paciente = {
		nome: form.nome.value, 
		peso: form.peso.value, 
		altura: form.altura.value, 
		gordura: form.gordura.value,
		imc: calculoImc(form.peso.value, form.altura.value)
	};

	return paciente;	
}

function montaTrAdicionaATabela(paciente){
	let tabelaPacientes = document.querySelector('#tabela-pacientes');
	/*Criando TR*/
	let pacienteTr = document.createElement('tr');
	pacienteTr.classList.add('paciente');

	/*Validando imc caso retorne mensagem de erro "peso" ou "altura" inválidos destacando em vermelho*/
	console.log(typeof(paciente.imc));
	if(paciente.imc === 'Peso inválido!' || paciente.imc === 'Altura inválida!' || paciente.imc === 'Peso e Altura inválidos!'){
		pacienteTr.classList.add('paciente-invalido');
	}

	/*Adicionando TDs recem montadas como filhas da TR*/
	pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
	pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
	pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
	pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
	pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));
	
	/*Adicionando TR totalmente preenchida na tbody '#tabela-pacientes'*/
	tabelaPacientes.appendChild(pacienteTr);
}

function montaTd(dado, classeCss){
	let td = document.createElement('td');
	td.textContent = dado;/*Setando valores vindos do formulario em cada TD*/
	td.classList.add(classeCss);

	return td;
}

/*Retorna alguma mensagem caso os dados paciente no form estejam invalidos*/
function validaPaciente(paciente){
	let mensagem = [];
	if(paciente.nome === '')
		mensagem.push('Informe nome do paciente '); 
	if(!validaPeso(paciente.peso))
		mensagem.push('Peso inválido ');
	
	if(!validaAltura(paciente.altura))
		mensagem.push('Altura inválida ');
	
	if(!validaPeso(paciente.peso) && !validaAltura(paciente.altura))
		mensagem.push('Peso e Altura inválidos ');

	if(paciente.gordura === '')
		mensagem.push('Informe a % de gordura ');
	return mensagem;
}

function exibeMensagensErro(erros){
	//let ul = document.querySelector();
	//mensagensErros	
	for(let i=0; i<erros.length; i++){	
		let li = document.createElement('li');	
		li.textContent = erros[i];
		mensagensErros.appendChild(li);
	}
}