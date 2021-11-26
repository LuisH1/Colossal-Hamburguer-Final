const lista = document.getElementsByClassName("itens-list");

for (let i = 0; i < lista.length; i++) {
    lista[i].addEventListener("mouseover", function () {
        this.style.padding = "20px"
        this.style.border = "2px solid #A6370F"
    })
    
    lista[i].addEventListener("mouseout", function () {
        this.style.padding = "10px"
        this.style.border = "none"
    })
}
