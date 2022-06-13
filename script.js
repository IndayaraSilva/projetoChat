var mensagens = [];
var ultimo;


function mensagem1() {
  var conteudo1 = document.getElementById("texto1").value
  var mensagem = {
    "nome": "User1",
    "conteudo": conteudo1
  }
  mensagens.push(mensagem)
  console.log(mensagens)
  ultimo = mensagens[(mensagens.length) - 1]
  console.log(ultimo)
  mostrarMensagem()
  gravarMensagens()
}

function mensagem2() {
  var conteudo2 = document.getElementById("texto2").value
  var mensagem = {
    "nome": "User2",
    "conteudo": conteudo2
  }
  mensagens.push(mensagem)
  console.log(mensagens)
  ultimo = mensagens[(mensagens.length) - 1]
  console.log(ultimo)
  mostrarMensagem()
  gravarMensagens()
}

function mostrarMensagem() {
  lerMensagens()
  var conteudo1 = document.getElementById("texto1").value
  var conteudo2 = document.getElementById("texto2").value
  var chat = document.getElementById("chat")
  if (ultimo.nome == "User1") {
    chat.innerHTML += `<div class="textosChat" id="mensagem_azul">
        ${conteudo1}
        </div>`
  } else if (ultimo.nome == "User2") {
    chat.innerHTML += `<div class="textosChat" id="mensagem_verde">
        ${conteudo2}
        </div>`
  }

}

function gravarMensagens() {
  var mensagensGravadas = JSON.stringify(mensagens)
  localStorage.setItem("Mensagens", mensagensGravadas)
}
function lerMensagens() {
  var mensagensGravadas = localStorage.getItem("Mensagens")
  var mensagens = JSON.parse(mensagensGravadas)
}