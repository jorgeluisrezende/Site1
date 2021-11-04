// ========== Menu "hamburguer" ===========
let hamburguer = document.querySelector(".hamburguer");
let fecharSideBar = document.querySelector(".fechaMenu");

// ========== Scroll top ===========
let link_top = document.getElementById('link-topo');



// ========== Menu "hamburguer" ===========
hamburguer.addEventListener("click", function () {
    document.querySelector(".container").classList.toggle("show-menu");
    document.querySelector('.fechaMenu').classList.toggle('isClose');
})
fecharSideBar.addEventListener("click", function () {
    document.querySelector(".container").classList.toggle("show-menu");
    document.querySelector(".fechaMenu").classList.toggle('isClose');
})

// ========== Scroll top ===========
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
