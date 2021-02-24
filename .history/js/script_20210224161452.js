let hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");
})


document.querySelector("#quantidade").addEventListener("change", attValue)
document.querySelector("#js").addEventListener("change", attValue)
document.querySelector("#layout-sim").addEventListener("change", attValue)
document.querySelector("#prazo").addEventListener("change", attValue)
function attValue() {
    const quantidade = document.querySelector("#quantidade").value
    const needJS = document.querySelector("#js").checked
    const needLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#p")
    let valorTotal = quantidade * 100;
    
    if(needJS) {valorTotal *= 1.1}
    if(needLayout) {valorTotal += 500}

    document.querySelector("#valorTotal").innerHTML = `R$ ${valorTotal.toFixed(2)}`
    console.log(quantidade)
}