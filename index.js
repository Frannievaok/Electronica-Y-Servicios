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
                "assets/pruebas-en-laboratorio.jpg",
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

var sliderRight = document.querySelector(".slider-right");
var sliderLeft = document.querySelector(".slider-left");
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

sliderRight.addEventListener("click", function(){
    clearInterval(intervalo);
    moveRight();
    intervalo = setInterval(moveRight, 4000);
});

function moveLeft(){
    contador--;
    if(contador < 0){
        contador = imagenes.length - 1;
    }
    document.image.src = imagenes[contador];
    description.innerText = contentDescription[contador];
}

sliderLeft.addEventListener("click", moveLeft);

