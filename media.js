alert("Bienvenido");
let usuario =prompt("¿Cual es tu nombre de usuario?");
const myBirthday = '18.04.1982'

console.log(document)

let titulo = document.querySelector("h1");
titulo.style.color= "blue";

let elemento = document.getElementById("saludarDos");

elemento.addEventListener("click", miFuncion);

function miFuncion() {
    document.body.style.backgroundColor ="red";

}

let elementoTres = document.getElementById("saludarTres");

elementoTres.addEventListener("click", miFuncionTres);

function miFuncionTres() {
    document.body.style.backgroundColor ="red";
    
}





