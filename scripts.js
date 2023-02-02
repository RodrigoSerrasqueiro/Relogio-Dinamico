function carregar(){
  let data = new Date()
  let hora = data.getHours()
  let minutos = data.getMinutes()
  let img = document.getElementById('image')
  let resultado = document.getElementById('hours')
  let mensagem =`Agora são <strong>${hora} horas</strong> e 
  <strong>${minutos} minutos.</strong>`
  
  //verifica o horário do usuário e exibe em tela
  //a cor de fundo e a imagem são diferentes conforme o horário.
  if(hora < 6){
    img.src='./madrugada.jpg'
    document.body.style.backgroundColor='#262626'
    resultado.innerHTML=`${mensagem} Boa madrugada!`
    document.body.style.color='#fff'
  }else if(hora < 12){
    img.src='./manha.jpg'
    document.body.style.backgroundColor='#66b3ff'
    resultado.innerHTML=`${mensagem} Bom dia!` 
  }else if(hora < 18){
    img.src='./tarde.jpg'
    document.body.style.backgroundColor='#ffaf1a'
    resultado.innerHTML=`${mensagem} Boa tarde!` 
  }else{
    img.src='./noite.jpg'
    document.body.style.backgroundColor='#8c8c8c'
    resultado.innerHTML=`${mensagem} Boa noite!`
  }
}
setTimeout(function() { //a página é recarregada automaticamente a cada 30s para que a hora exibida seja sempre atual.
  window.location.reload(1);
}, 30000);