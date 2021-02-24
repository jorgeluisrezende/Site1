let hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");
})


document.querySelector("#quantidade").addEventListener("change", attValue)
document.querySelector("#js").addEventListener("change", attValue)
document.querySelector("#layout-sim").addEventListener("change", attValue)

// FUNÇÃO PARA O PRAZO D ENTREGA
document.querySelector("#prazo").addEventListener("change", function() {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semana(s)`
    attValue()
})


// FUNÇÃO PARA OS DEMAIS REQUISITOS DE SERVIÇOS DE ORÇAMENTO
function attValue() {
    const quantidade = document.querySelector("#quantidade").value
    const needJS = document.querySelector("#js").checked
    const needLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value
    let valorTotal = quantidade * 100;
    
    if(needJS) {valorTotal *= 1.1}
    if(needLayout) {valorTotal += 500}

    let taxaUrgencia = 1 - prazo * 0.1;
    valorTotal *= 1 + taxaUrgencia;

    document.querySelector("#valorTotal").innerHTML = `R$ ${valorTotal.toFixed(2)}`
    console.log(quantidade)
}
