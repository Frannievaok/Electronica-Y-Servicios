const dropdowMenu = document.querySelector(".bi-list");
const navLinks = document.querySelector(".nav-links");
const btnDropdownMenu = document.querySelector("#btn-dropdown-menu");

dropdowMenu.addEventListener("click",()=>{
    if(navLinks.classList.contains("mobile-menu")) {
        navLinks.classList.remove("mobile-menu");
        btnDropdownMenu.classList.remove('bi-x-lg');
        btnDropdownMenu.classList.add("bi-list");
    }  else {
        navLinks.classList.toggle("mobile-menu");
        btnDropdownMenu.classList.remove('bi-list');
        btnDropdownMenu.classList.add('bi-x-lg');
    }
})

var service = document.querySelector(".service-1");
var visibleDescription = document.querySelector(".s1");

service.addEventListener("click",visible);

function visible(){
    visibleDescription.classList.toggle("active");
}


var service2 = document.querySelector(".service-2");
var visibleDescription2 = document.querySelector(".s2");

service2.addEventListener("click",visible2);

function visible2(){
    visibleDescription2.classList.toggle("active");
}


var service3 = document.querySelector(".service-3");
var visibleDescription3 = document.querySelector(".s3");

service3.addEventListener("click",visible3);

function visible3(){
    visibleDescription3.classList.toggle("active");
}



var imagenes = [
                "assets/pruebas-en-laboratorio2.jpg",
                "assets/reparacion-de-modulos.jpg",
                "assets/diagnostico-en-planta.jpg"
]

var description = document.getElementById("description");

var contentDescription = [
                `LABORATORIO DE REFERENCIA 
                    EN EL NORTE DEL PAIS`,
                "REPARACION DE MODULOS",
                "DIAGNOSTICO EN PLANTA"
];

document.image.src=imagenes[0];
description.innerText = contentDescription[0];

var contador = 0;

function moveRight(){
    contador++;
    if(contador > imagenes.length - 1){
        contador = 0;
    }
    document.image.src = imagenes[contador];
    description.innerText = contentDescription[contador];
}

var intervalo = setInterval(moveRight, 4000);




var imagenes2 = [
    "assets/reparacion-1.jpg",
    "assets/reparacion-2.jpg",
    "assets/reparacion-3.jpg",
    "assets/reparacion-4.jpg",
    "assets/reparacion-5.jpg",
    "assets/reparacion-6.jpg",
    "assets/reparacion-7.jpg",
    "assets/reparacion-8.jpg",
]

var description2 = document.getElementById("description2");

var contentDescription2 = [
    "REPARAION DE MODULO DE CARGA DE TIJERA JLG",
    "REPARACION DE MODULO DE MOTOR DE AUTOELEVADOR DOSSAN",
    "REPARACION DE MODULO DE MOTOR DE AUTOELEVADOR DOSSAN",
    "REPARACION DE MODULO DE CONTROL DE CARRETILLA ELECTRICA MITSUBISHI",
    "REPARACION DE MODULO DE MOTOR DE AUTOELEVADOR LINDE",
    "EQUIPO GENKINGER CON MODULO DE DIRECCION DAÑADO. SE RETIRO EL MISMO PARA SU REPARACION",
    "REPARACION DE PLACA DE POTENCIA DE ZORRA MITSUBISHI",
    "DIAGNOSTICO EN BANCO Y REPARACION DE MODULO DE AUTOELEVADOR ELECTRICO TOYOTA",
    "REPARACION DE MODULO PARA BRAZO JLG"
];

document.image2.src=imagenes2[0];
description2.innerText = contentDescription2[0];

var contador2 = 0;

function moveRight2(){
contador2++;
if(contador2 > imagenes2.length - 1){
contador2 = 0;
}
document.image2.src = imagenes2[contador2];
description2.innerText = contentDescription2[contador2];
}

var intervalo2 = setInterval(moveRight2, 4000);