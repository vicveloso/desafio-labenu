//abaixo está detalhado os passo para imprimir na tela um //alerta mostrando que o e-mail inserido no espaço //solicitado foi enviado

//referenciando os elementos que irei usar, de acordo com o //id citado no documento index.html 
let inputElement = document.getElementById("contact");
let formsElement = document.getElementById("formSendEmail");
//função para imprimir o alerta na tela, definindo que toda vez que for submetido um input de tipo e-mail, irá aparecer um alerta na tela com o valor desse input. Caso o input não esteja vazio, enviará uma mensagem acusando que o e-mail está inválido
formsElement.onsubmit = function(){
  if (inputElement.value == null) {
    let disabled = "E-mail inválido";
} else {
     let available = (`O e-mail ${inputElement.value} foi enviado`);
    alert (available);
}
   
}

