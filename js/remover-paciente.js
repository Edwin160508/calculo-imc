var pacientes = document.querySelectorAll('.paciente');

var tabela = document.querySelector('table');
tabela.addEventListener('dblclick', function(event){
	//event.target => Alvo que foi clicado
	//event.target.parentNode => Nó pai do Alvo
	event.target.parentNode.remove(); //Nó pai sofrendo ação
});