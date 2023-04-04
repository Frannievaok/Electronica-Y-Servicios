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

