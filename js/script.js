let hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function () {
    document.querySelector(".container").classList.toggle("show-menu");
})

// Scroll top
let link_top = document.getElementById('link-topo');

window.onscroll = function () { btn_scroll_top() };

function btn_scroll_top() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        link_top.style.opacity = '1'
    }
    else {
        link_top.style.opacity = '0'
    }
}

link_top.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
