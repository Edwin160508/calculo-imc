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