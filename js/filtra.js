var campoFiltro = document.querySelector('#filtrar-tabela');

campoFiltro.addEventListener('input', function(event){
	/* "this" equivale a campoFiltro */
	var pacientes = document.querySelectorAll('.paciente');	

	if(this.value.length > 0){
		/* com forEach "this" perdeu a referencia de campoFiltro passando a referenciar "Window" */
		pacientes.forEach(function(paciente){ 
			var nome = paciente.querySelector('.info-nome').textContent;		
			if(nome != campoFiltro.value){
				paciente.classList.add('invisivel');
			}else{
				paciente.classList.remove('invisivel');
			}
		});
	}else{
		pacientes.forEach(function(paciente){
			paciente.classList.remove('invisivel');
		});
	}
	
});