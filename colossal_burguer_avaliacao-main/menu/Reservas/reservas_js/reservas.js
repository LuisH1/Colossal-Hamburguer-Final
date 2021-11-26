function verifyDataInputs() {
    let inputs = document.querySelectorAll(".info")
    let total = 0

    for(let i = 0; i < inputs.length; i++){
        if (inputs[i].value.length == 0) {
            total++
        }
    }
    return total > 0 ? false : true
}

function applyMessage() {
    const divMessage = document.querySelector(".message")
    divMessage.style.display = "block"
    if (verifyDataInputs()) {
        divMessage.style.backgroundColor = "#03c90396"
        divMessage.innerHTML = "Sua Reserva foi salva, estamos te aguardando no Colossal Burguer!"
    }else{
        divMessage.style.backgroundColor = "#ff00008f"
        divMessage.innerHTML = "Por favor verifique se todos os dados foram preenchidos."
    }
    messageTimeOut(divMessage)

}

function cancel() {
    let inputs = document.querySelectorAll(".info")
    
    for(let i = 0; i < inputs.length; i++){
        inputs[i].value = ""
    }
    
    const divMessage = document.querySelector(".message")
    divMessage.style.display = "block"
    divMessage.style.backgroundColor = "#03c90396"
    divMessage.innerHTML = "Sua reserva foi cancelada!"
    messageTimeOut(divMessage)
}

function messageTimeOut(div) {
    setTimeout(() => div.style.display = "none", 8000)
}