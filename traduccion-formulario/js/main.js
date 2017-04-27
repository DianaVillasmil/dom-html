function traducir() {
	var titulo = document.getElementById("form-signin-heading");
	var correo = document.getElementById("inputEmail");
	var contrasena = document.getElementById("inputPassword");

	var recordar = document.getElementsByTagName("span")[0];
	var boton = document.getElementsByClassName("btn")[0];

	titulo.innerHTML = "Por favor inicia sesión";
	correo.placeholder = "Correo Electronico";
	contrasena.placeholder = "Contraseña";
	recordar.innerHTML = "Recordar datos";
	boton.innerHTML = "iniciar Sesión";


}
traducir()

function iniciarSesion() {
	var correo = document.getElementById("inputEmail");
	var contrasena = document.getElementById("inputPassword");

	var resultado = document.getElementById("resultado");
	resultado.innerHTML = "El correo electronico ingresado es <br/>" + correo.value + "<br/> La clave ingresada es <br/>" + contrasena.value;
	return false;
}
