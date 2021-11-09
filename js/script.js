// ========== Menu "hamburguer" ===========
let hamburguer = document.querySelector(".hamburguer");
let fecharSideBar = document.querySelector(".fechaMenu");

hamburguer.addEventListener("click", function () {
    document.querySelector(".container").classList.toggle("show-menu");
    document.querySelector('.fechaMenu').classList.toggle('isClose');
})
fecharSideBar.addEventListener("click", function () {
    document.querySelector(".container").classList.toggle("show-menu");
    document.querySelector(".fechaMenu").classList.toggle('isClose');
})


// ========== botão para exibir div de projetos ===========
let div_projetos_hidden = document.querySelector('.projetos_hidden');
let Hidden_cards = document.querySelectorAll('.hidden_cards');
let btn_open_div = document.querySelector('.btn_open');

btn_open_div.addEventListener('click', () => {
    if(div_projetos_hidden.style.display == 'none') {
        div_projetos_hidden.style.display = 'flex';
    } else {
        div_projetos_hidden.style.display = 'none';
        Hidden_cards.forEach(card => {
            
        })
    }
})


// ========== Scroll top ===========
let link_top = document.getElementById('link-topo');

window.onscroll = () => {
    if (document.body.scrollTop !=0 || document.documentElement.scrollTop != 0) {
        link_top.style.opacity = '.8';
    }
    else {
        link_top.style.opacity = '0';
    }
}
link_top.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
})