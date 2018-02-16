var botaoBuscarPacientes = document.querySelector('#buscar-pacientes');

botaoBuscarPacientes.addEventListener('click', function(event){
	console.log('Buscando pacientes... ');
	get('http://api-pacientes.herokuapp.com/pacientes');
});

function get(url){
	return new Promise((resolve, reject)=>{
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
		/*xhr.onreadystatechange = () =>{
			if(xhr.readyState === 4){
				if(xhr.status === 200){
					resolve(JSON.parse(xhr.responseText));
					console.log(xhr.responseText);
				}else{
					reject(xhr.responseText);
					console.log(xhr.responseText);
				}
			}
		};*/
		xhr.send();
	});
}