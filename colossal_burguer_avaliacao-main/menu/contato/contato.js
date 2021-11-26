

var regexMail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
var email = regexMail.exec()
//funcao maquina de escrever.
var span = document.getElementById('write-alone')
function machineWrite(el) {
  let textArr = el.innerHTML.split('')
  el.innerHTML = '';
  textArr.forEach((letter, i) => {
    setTimeout(() => {
      el.innerHTML += letter
    }, 40 * i);
  })
}

machineWrite(span)


//funcao checkout, chamada quando o o formulario é validado
function checkout() {
  let form = document.getElementById('form');
  let name = document.getElementById('name').value
  span.remove()
  form.remove()

  let check = document.createElement('p')
  check.innerHTML = `Muito obrigado ${name}, em menos de 1 minuto entraremos em contato!`
  let checked = document.createElement('div')
  checked.id = 'checked'
  checked.innerHTML = 'Aguarde!'

  machineWrite(check)
  machineWrite(checked)



  document.getElementById('welcome').appendChild(check)
  document.getElementById('welcome').appendChild(checked)

  //duracão do cronometo, e elemento em qualserá iserido
  let duration = 60 * 1
  let display = document.getElementById('checked')

  //chamando funcao cronometro
  stopWatch(duration, display)

}



function stopWatch(duration, display) {

  var timer = duration, minutes, seconds

  setInterval(() => {

    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds

    display.textContent = minutes + ":" + seconds

    if (--timer < 0) {
      timer = +duration;
    }


  }, 1000);
}

  function validate() {

    let name = document.getElementById('name')
    let mail = document.getElementById('mail').value
    let tel = document.getElementById('tel')
    let comment = document.getElementById('comment')

  

 

    if (name.value == '') {
      span.remove()
      span = document.createElement('p')
      span.innerHTML = 'Campo nome não pode ficar vázio!'
      span.id = 'nome'
      document.getElementById('welcome').appendChild(span)
      machineWrite(span)
    }
    else if (mail == '') {
      span.remove()
      span = document.createElement('p')
      span.innerHTML = 'Campo email não pode ficar vázio!'
      span.id = 'email'
      document.getElementById('welcome').appendChild(span)
      machineWrite(span)
    }

    else if (tel.value == '') {

      span.remove()
      span = document.createElement('p')
      span.innerHTML = 'Campo telefone não pode ficar vázio!'
      span.id = 'phone'
      document.getElementById('welcome').appendChild(span)
      machineWrite(span)
    }

    else if (comment.value == '') {
      span.remove()
      span = document.createElement('p')
      span.innerHTML = 'Campo comentário não pode ficar vázio!'
      span.id = 'comments'
      document.getElementById('welcome').appendChild(span)
      machineWrite(span)
    }
    else if (true) {
      checkout()
    }
  }

