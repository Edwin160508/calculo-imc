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

	/*Criando TD*/
	let nomeTd = document.createElement('td');
	nomeTd.classList.add('info-nome');
	let pesoTd = document.createElement('td');
	pesoTd.classList.add('info-peso');
	let alturaTd = document.createElement('td');
	alturaTd.classList.add('info-altura');
	let gorduraTd = document.createElement('td');
	gorduraTd.classList.add('info-gordura')
	let imcTd = document.createElement('td');
	imcTd.classList.add('info-imc');

	/*Setando valores vindos do formulario em cada TD*/
	nomeTd.textContent = paciente.nome;
	pesoTd.textContent = paciente.peso;
	alturaTd.textContent = paciente.altura;
	gorduraTd.textContent = paciente.gordura;
	imcTd.textContent = paciente.imc;

	if(typeof(paciente.imc) != 'number'){
		pacienteTr.classList.add('paciente-invalido');
	}
	/*Adicionando TDs como filhas da TR*/
	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);
	
	/*Adicionando TR totalmente preenchida na tbody '#tabela-pacientes'*/
	tabelaPacientes.appendChild(pacienteTr);
}