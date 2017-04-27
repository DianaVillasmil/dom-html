function cambiarGato() {
	var contenedor = document.getElementById("contenedor.gato");
	var random = Math.floor((Math.random() * res.data.length));
	contenedor.innerHTML = <img src="" + res.data[random].images.downsized.url + ">";
	console.log("entrando");
}
function imprimirEmail() {
	var input = document.getElementById("email");
	var ce = document.getElementByClasName("cont-email");

	ce[0].innerHTML += input.value;
}