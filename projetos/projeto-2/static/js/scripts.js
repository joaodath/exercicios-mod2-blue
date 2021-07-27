const navbar2python = document.querySelector("#python-btn");
const pythonblock = document.querySelector(".projetos-python-container");

const navbar2front = document.querySelector("#frontend-btn");
const frontendblock = document.querySelector(".projetos-frontend-container");

const navbar2branding = document.querySelector("#branding-btn");
const brandingblock = document.querySelector(".projetos-branding-container");

const portfblock = document.querySelector(".portf-placeholder");

const navbar2fale = document.querySelector("#fale-comigo-btn");


window.onload = function () {
    navbar2python.value = 'shown';
    navbar2python.focus();
    pythonblock.style.display = 'flex';
    portfblock.style.display = 'none';
};

navbar2python.onclick = function () {
    if (navbar2python.value === 'hidden'){
        // Remove o foco do botão e seção branding
        navbar2branding.value = 'hidden';
        navbar2branding.blur();
        brandingblock.style.display = 'none';
        //Remove o foco do botão e seção front
        navbar2front.value = 'hidden';
        navbar2front.blur();
        frontendblock.style.display = 'none';
        //Esconde o placeholder
        portfblock.style.display = 'none';
        //Adiciona o foco no botão e seção python
        navbar2python.value = 'shown';
        navbar2python.focus();
        pythonblock.style.display = 'flex';
        
    } 
    else if (navbar2python.value === 'shown') {
        //Remove o foco do botão e seção python
        navbar2python.value = 'hidden';
        navbar2python.blur();
        pythonblock.style.display = 'none';
        //Mostra o placeholder
        portfblock.style.display = 'flex';
    }
}

navbar2front.onclick = function () {
    if (navbar2front.value === 'hidden'){
        // Remove o foco do botão e seção python
        navbar2python.value = 'hidden';
        navbar2python.blur();
        pythonblock.style.display = 'none';
        // Remove o foco do botão e seção branding
        navbar2branding.value = 'hidden';
        navbar2branding.blur();
        brandingblock.style.display = 'none';
        //Esconde o placeholder
        portfblock.style.display = 'none';
        // Adicionar o foco no botão e seção html
        navbar2front.value = 'shown';
        navbar2front.focus();
        frontendblock.style.display = 'flex';
    } 
    else if (navbar2front.value === 'shown') {
        //Remove o foco do botão e seção front
        navbar2front.value = 'hidden';
        navbar2front.blur();
        frontendblock.style.display = 'none';
        //Mostra o placeholder
        portfblock.style.display = 'flex';
    }
}

navbar2branding.onclick = function () {
    if (navbar2branding.value === 'hidden'){
        // Remove o foco do botão e seção front
        navbar2front.value = 'hidden';
        navbar2front.blur();
        frontendblock.style.display = 'none';
        // Remove o foco do botão e seção python
        navbar2python.value = 'hidden';
        navbar2python.blur();
        pythonblock.style.display = 'none';
        //Esconde o placeholder
        portfblock.style.display = 'none';
        // Adicionar o foco no botão e seção branding
        navbar2branding.value = 'shown';
        navbar2branding.focus();
        brandingblock.style.display = 'flex';
    } 
    else if (navbar2branding.value === 'shown') {
        //Remove o foco do botão e seção branding
        navbar2branding.value = 'hidden';
        navbar2branding.blur();
        brandingblock.style.display = 'none';
        //Mostra o placeholder
        portfblock.style.display = 'flex';
    }
}

//Código Importado (e levemente modificado) do projeto flask template em codethi
let inputNome = document.querySelector('#nome') /* Cria a variável inputNome e coloca nela o elemento que possui o id nome */
let inputEmail = document.querySelector('#email') /* Cria a variável inputEmail e coloca nela o elemento que possui o id email */
let textareaMensagem = document.querySelector('#mensagem') /* Cria a variável textareaMensagem e coloca nela o elemento que possui o id mensagem */
let btnEnviar = document.querySelector('#enviar') /* Cria a variável btnEnviar e coloca nela o elemento que possui o id enviar */
let nomeOk = false /* variável de controle para o botão */
let emailOk = false /* variável de controle para o botão */
let msgOk = false /* variável de controle para o botão */
btnEnviar.disabled = true /* Desabilita o botão assim que inicia a página html */
btnEnviar.classList.remove("hoverbtn") /* Remove a classe hover do botão */
/* Só posso utilziar a arrow function (=>) quando a função não tiver nome */

/* Adiciona um evento de keyup no inputNome e realiza a função */
inputNome.addEventListener('keydown', () => { 
   /* Verifica se o tamanho do valor do inputNome é menor que 2 */
   if(inputNome.value.length < 2){
      inputNome.style.borderColor = 'red' /* Troca a cor da borda do input para red */
      nomeOk = false
   } else {
      inputNome.style.borderColor = 'green' /* Troca a cor da borda do input para green */
      nomeOk = true
   }

   if(inputNome.value == '' || inputNome.value == undefined || inputNome.value == null) {
      inputNome.style.borderColor = '#ccc'
   }

   /* Se todas as variáveis forem true habilita o botão */
   if (nomeOk && emailOk && msgOk) {
      btnEnviar.disabled = false
      btnEnviar.classList.add("hoverbtn")
   } else { /* se não, desabilita */
      btnEnviar.disabled = true
      btnEnviar.classList.remove("hoverbtn")
   }

})


/* Adiciona um evento de keyup no inputEmail e realiza a função */
inputEmail.addEventListener('keyup', () => {
   /* 
   O indexOf procura um caractere no valor do inputEmail, se esse valor não existir ele retorna -1. 
   Então essa expressão inputEmail.value.indexOf('@') == -1 é a mesmo coisa que:
   Se no valor de inputEmail não existir @, faça...

   || é o operador OU em JavaScript
   && é o operador E em JavaScript
   */
   if(inputEmail.value.indexOf('@') == -1 || inputEmail.value.indexOf('.') == -1){
      inputEmail.style.borderColor = 'red' /* Troca a cor da borda do input para red */
      emailOk = false
   } else {
      inputEmail.style.borderColor = 'green' /* Troca a cor da borda do input para green */
      emailOk = true
   }  

   /* Se todas as variáveis forem true habilita o botão */
   if (nomeOk && emailOk && msgOk) {
      btnEnviar.disabled = false
      btnEnviar.classList.add("hoverbtn");
   } else { /* se não, desabilita */
      btnEnviar.disabled = true
      btnEnviar.classList.remove("hoverbtn");
   }
})

/* Adiciona um evento de keyup no textareaMensagem e realiza a função */
textareaMensagem.addEventListener('keyup', ()=>{
   /* Verifica se o tamanho do valor do textareaMensagem é maior que 100  */
   if(textareaMensagem.value.length > 100){
      textareaMensagem.style.borderColor = 'red' /* Troca a cor da borda do input para red */
      msgOk = false
   } else {
      textareaMensagem.style.borderColor = 'green' /* Troca a cor da borda do input para green */
      msgOk = true
   }

   /* Se todas as variáveis forem true habilita o botão */
   if (nomeOk && emailOk && msgOk) {
      btnEnviar.disabled = false
      btnEnviar.classList.add("hoverbtn")
   } else { /* se não, desabilita */
      btnEnviar.disabled = true
      btnEnviar.classList.remove("hoverbtn")
   }
})