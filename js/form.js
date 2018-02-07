/*Adicionar Dados do formulário na tabela*/
document.querySelector('#adicionar-paciente').addEventListener('click', function(event){
	event.preventDefault();
	let form = document.querySelector('#form-adciona');
	let pacienteFormulario = obterPacienteFormulario(form);
	
	montaTrAdicionaATabela(pacienteFormulario);	
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

	/*Criando e montando TD*/
	let nomeTd = montaTd(paciente.nome, 'info-nome');
	let pesoTd = montaTd(paciente.peso, 'info-peso');
	let alturaTd = montaTd(paciente.altura, 'info-altura');
	let gorduraTd = montaTd(paciente.gordura, 'info-gordura');
	let imcTd = montaTd(paciente.imc, 'info-imc');

	/*Validando imc caso retorne mensagem de erro "peso" ou "altura" inválidos*/
	if(typeof(paciente.imc) != 'number'){
		pacienteTr.classList.add('paciente-invalido');
	}

	/*Adicionando TDs recem montadas como filhas da TR*/
	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);
	
	/*Adicionando TR totalmente preenchida na tbody '#tabela-pacientes'*/
	tabelaPacientes.appendChild(pacienteTr);
}

function montaTd(dado, classeCss){
	let td = document.createElement('td');
	td.textContent = dado;/*Setando valores vindos do formulario em cada TD*/
	td.classList.add(classeCss);

	return td;
}