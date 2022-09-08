// Abre e fecha menu lateral no mobile

const menuMobile = document.querySelector(".menu-mobile");
const body = document.querySelector("body");

menuMobile.addEventListener("click", () => {
    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list");
    body.classList.toggle("menu-nav-active");
});

// fecha o menu quando clica em algum item e muda o icone para list

const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
    item.addEventListener("click", () =>{
        if(body.classList.contains("menu-nav-active")) {
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list");
        }
    })
})

// animar itens da tela com data-anime

const item = document.querySelectorAll('[data-anime]');

const animeScroll = () => {
    const windowTop = window.scrollY + window.innerHeight * 0.85;
    
    item.forEach(element =>{
        if(windowTop > element.offsetTop){
            element.classList.add("animate");
        } else{
            element.classList.remove("animate");
        }
    });

};

animeScroll();

window.addEventListener("scroll", () =>{
    animeScroll();
})


// Ativar carregamento do botao enviar

const btnEnviar = document.querySelector('#btn-enviar')
const btnEnviarLoader = document.querySelector('#btn-enviar-mensagem')

const msgEnviada = document.querySelector("#alerta")

btnEnviar.addEventListener("click", ()=>{
    btnEnviarLoader.style.display = "block";
    btnEnviar.style.display = "none"
    
    setTimeout(() =>{
        document.querySelector('#alerta').style.display = 'block';
    }, 3000)

    msgEnviada.style.display = 'block'

})

//Tirar msg 5 sec

setTimeout(() =>{
    document.querySelector('#alerta').style.display = 'none';
}, 5000)