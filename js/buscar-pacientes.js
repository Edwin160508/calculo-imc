var botaoBuscarPacientes = document.querySelector('#buscar-pacientes');

botaoBuscarPacientes.addEventListener('click', function(event){
	console.log('Buscando pacientes... ');
	get('http://api-pacientes.herokuapp.com/pacientes');
});

function get(url){
	return new Promise((resolve, reject)=>{
		let xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.addEventListener("load", function(event){	
			/*Transformando String em Array*/		
			let pacientes = JSON.parse(xhr.responseText);
			pacientes.forEach(function(paciente){
				montaTrAdicionaATabela(paciente);
			});
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