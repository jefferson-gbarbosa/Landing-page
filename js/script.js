/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const menu = document.getElementById('menu');
const navBar = document.querySelector(".navbar");
const links = document.querySelectorAll('nav ul li a')
menu.onclick = function(){
    navBar.classList.toggle('show');
    menu.classList.toggle('fa-times')
}
/* quando clicar em um item do menu, esconder o menu */
for (const link of links) {
    link.addEventListener('click', function () {
        navBar.classList.remove('show')
        menu.classList.remove('fa-times')
    });
}

