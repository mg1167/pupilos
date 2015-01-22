function AlumnosController($scope){
		$scope.alumnos=[
			{nombre: "Moises Guerra", Genero: "Masculino", trabajo: "Cognits Team"},
			{nombre: "Alejandro Batres", Genero: "Masculino", trabajo: "Cognits Team"},
			{nombre: "Alejandro Tamayo", Genero: "Masculino", trabajo: "Cognits Team"},
			{nombre: "Marcos Rodriguez", Genero: "Masculino", trabajo: "Cognits Team"},
			{nombre: "Erick Gonzales", Genero: "Masculino", trabajo: "Cognits Team"}
		];
			//El scope siguiente capturara los valores de entrada.
		$scope.Save = function(){
			$scope.alumnos.push({nombre:$scope.nuevoAlumno.nombre, Genero:$scope.nuevoAlumno.Genero, trabajo:$scope.nuevoAlumno.trabajo});
			alert("Nuevo integrante de Cognits agregado correctamente.");
			console.log("Registro añadido");
		}
}
			//scope: es el alcance o limite al que se quiere llegar.