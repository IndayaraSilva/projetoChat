function botao1(){


    var addTexto1 = document.getElementById("texto1")
    var Paragrafo1 = document.createElement("p")
    
    Paragrafo1.innerHTML = addTexto1.value
    document.body.append(Paragrafo1);
}

function botao2(){

  var addTexto2 = document.getElementById("texto2")
  var Paragrafo2 = document.createElement("p")
  Paragrafo2.innerHTML = addTexto2.value


  document.body.append(Paragrafo2);

//"nessa parte podemos podemos substituir body por section(não sei se da certo)"
}
