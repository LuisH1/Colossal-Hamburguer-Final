function bemvindo(){
    let out = document.createElement('div')
    out.innerHTML = 'Seja bem-vinde ao Colossal Burguer'
    out.id = 'new-div'
    
    document.body.appendChild(out)
}

function enviar(){
    let email = document.getElementById('mail')
    let senha = document.getElementById('senha')

    if(email.value == ''){
        alert('Por favor verifique se todos os dados foram preenchidos.')
    }else if(senha.value == ''){
        alert('Por favor verifique se todos os dados foram preenchidos.')
    }else if(true){
        let form = document.getElementById('formulario')
        let mensagem = document.getElementById('mensagem')
        mensagem.remove()
        form.remove()

        bemvindo()
    }
}

var btn = document.getElementById('esqueceu-senha')
    btn.addEventListener('click', () => {
        alert('Para recuperar a senha, entre em contato com o restaurante.')
    })
