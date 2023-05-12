const btnEncriptar = document.getElementById("boton-encriptar");
const btnDesencriptar = document.getElementById("boton-desencriptar");
const btnCopiar = document.getElementById("boton-copiar");
const textoCopiado = document.getElementById("txt-copiado");
const textoDesencriptar = document.getElementById("texto-desencriptar");
const mensaje = document.getElementById("mensaje");
const imagen = document.getElementById("imagen");
const desencriptador = document.getElementById("desencriptador");


//funcion para encriptar
function encriptarTexto(texto){
    
    btnCopiar.style.display = "block";
    desencriptador.style.display = "flex";
    textoDesencriptar.style.display = "none";
    mensaje.style.display = "none";
    imagen.style.display = "none";
    texto = texto.toLowerCase();
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    return texto;
    btnCopiar.style.display = "block";
}

//funcion para desenciptar
function desencriptarTexto(texto){
    texto = texto.toLowerCase();
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
    return texto;
}

//funcion para copiar
function botonCopiar(){
    let textoEncriptado = document.getElementById("desencriptador");
    textoEncriptado.select();
    document.execCommand("copy");
    btnCopiar.style.display = "none";
    textoCopiado.style.display = "block";
    setTimeout(() => {
        btnCopiar.style.display = "block";
        textoCopiado.style.display = "none";
    }, 1000);
}

function botonEncriptar(){
    document.getElementById("desencriptador").value = encriptarTexto(document.getElementById("encriptador").value);
}

function botonDesencriptar(){
    document.getElementById("desencriptador").value = desencriptarTexto(document.getElementById("encriptador").value);
}

btnEncriptar.addEventListener("click", function(){
    botonEncriptar();
});

btnDesencriptar.addEventListener("click", function(){
    botonDesencriptar();
});

btnCopiar.addEventListener("click", function(){
    botonCopiar();
});
