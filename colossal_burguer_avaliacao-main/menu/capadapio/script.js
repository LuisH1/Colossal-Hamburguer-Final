var botao = document.getElementById("botaoTema")
const cor1= "black"
const cor2= "azure"

botao.addEventListener("click",() => {
    if (document.body.style.backgroundColor== cor1){
        document.body.style.backgroundColor= cor2
    } else{
        document.body.style.backgroundColor=cor1
    }
} );

  document.write(window.alert("Bem Vindo ao Cardapio da Colossal Burguer"))
  document.write(window.confirm('É um pazer ver você por aqui!'))
  document.write( window.prompt('Algum elogio ou reclamação sobre o cardapio, escreva aqui:'))
    

