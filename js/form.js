/*Adicionar Dados do formulário na tabela*/
document.querySelector('#adicionar-paciente').addEventListener('click', function(event){
	event.preventDefault();
	let form = document.querySelector('#form-adciona');
	let pacienteFormulario = obterPacienteFormulario(form);
	let erro = validaPaciente(pacienteFormulario);
	/*se maior que zero ocorreu algum erro */
	if(erro.length > 0){ 
		document.querySelector('#mensagem').textContent = erro;
		return;
	}
	
	montaTrAdicionaATabela(pacienteFormulario);	
	form.reset();
	document.querySelector('#mensagem').textContent = '';
});

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
	let mensagem = "";
	if(!validaPeso(paciente.peso))
		mensagem = 'Peso inválido!';
	
	if(!validaAltura(paciente.altura))
		mensagem ='Altura inválida!';
	
	if(!validaPeso(paciente.peso) && !validaAltura(paciente.altura))
		mensagem = 'Peso e Altura inválidos!';

	return mensagem;
}