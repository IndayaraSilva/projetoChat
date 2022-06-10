var mensagens = [];
var ultimo = [mensagens[mensagens.length-1]];

document.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        inserirItemTemplate();
    
    }})

function mensagem1() {
  var conteudo = document.getElementById("texto1").value
  var mensagem = {
    "nome": "User1",
    "conteudo": conteudo
  }
  mensagens.push(mensagem)
  
  // console.log(mensagens)
  // mostrarMensagem()
}

function mensagem2() {
  var conteudo = document.getElementById("texto2").value
  var mensagem = {
    "nome": "User2",
    "conteudo": conteudo
  }
  mensagens.push(mensagem)
  
  // console.log(mensagens)
  // mostrarMensagem()
}
var primeiro = mensagens[0]

// function mostrarMensagem() {
//   var chat = document.getElementById("chat")  
//   var ultimo = mensagens[mensagens.length - 1]
//   console.log(ultimo)


// }


  
  // if ( == "User1") {
  //   chat.innerHTML += `<div class="textosChat" id="mensagem_azul">
  //    ${mensagens.mensagem.conteudo}
  //   </div>`

  // } else if( == "User2") {
  //   chat.innerHTML += `<div class="textosChat" id="mensagem_azul">
  //   ${mensagens.mensagem.conteudo}
  //   </div>`
  // }


