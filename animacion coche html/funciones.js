var carro = document.querySelector('.carro');
var llanta = document.querySelector('.llanta');
var llanta2 = document.querySelector('.llanta-2');
var fondo = document.querySelector('.fondo');
var luz = document.querySelector('.luz')

carro.addEventListener('click', animacion)
function animacion(){
    carro.style.animationPlayState = 'running'
    llanta.style.animationPlayState = 'running'
    llanta2.style.animationPlayState = 'running'
    fondo.style.animationPlayState = 'running'
    luz.style.animationPlayState = 'running'
}