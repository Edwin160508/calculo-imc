var botaoBuscarPacientes = document.querySelector('#buscar-pacientes');

botaoBuscarPacientes.addEventListener('click', function(event){
	console.log('Buscando pacientes... ');
	get('http://api-pacientes.herokuapp.com/pacientes');
});

/*Função que faz requisições apenas do tipo GET*/
function get(url){
		let xhr = new XMLHttpRequest();
		let erroAjax = document.querySelector('#mensagem-erro-requisicao');
		xhr.open('GET', url);
		xhr.addEventListener("load", function(event){	
			if(xhr.status == 200){
				erroAjax.classList.add('invisivel');
				/*Transformando String em Array*/		
				let pacientes = JSON.parse(xhr.responseText);
				pacientes.forEach(function(paciente){
					montaTrAdicionaATabela(paciente);
				});				
			}else{
				console.log(xhr.status);
				console.log(xhr.responseText);				
				erroAjax.classList.remove('invisivel');
			}
			
		});
		
		xhr.send();
}