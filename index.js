
function encriptar()
{
	var entrada = document.getElementById("mensaje").value;
	var nuevoTexto = entrada;
	nuevoTexto = nuevoTexto.replace(/e/g,"enter")
	nuevoTexto = nuevoTexto.replace(/i/g,"imes");
	nuevoTexto = nuevoTexto.replace(/a/g,"ai");
	nuevoTexto = nuevoTexto.replace(/o/g,"ober");
	nuevoTexto = nuevoTexto.replace(/u/g,"ufat");

	imprimir(nuevoTexto);
}

function imprimir(salida)
{
	document.getElementById("traductor").innerHTML=salida;
}

function desencriptar()
{
	var entrada = document.getElementById("mensaje").value;
	var nuevoTexto = entrada;
	nuevoTexto = nuevoTexto.replace(/enter/g,"e")
	nuevoTexto = nuevoTexto.replace(/imes/g,"i");
	nuevoTexto = nuevoTexto.replace(/ai/g,"a");
	nuevoTexto = nuevoTexto.replace(/ober/g,"o");
	nuevoTexto = nuevoTexto.replace(/ufat/g,"u");

	imprimir(nuevoTexto);
}

function copiar()
{
	var content = document.getElementById('traductor').innerHTML;

    navigator.clipboard.writeText(content)
        .then(() => {
        console.log("Text copied to clipboard...")
        alert("Copiado!")
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
}


