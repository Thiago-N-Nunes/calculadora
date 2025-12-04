function Digitar(data){
  document.querySelector('#display').value += data;//Permite a soma de 1+ valores dentro do input a ser exibido
}

function clean(){
    document.querySelector('#display').value = ' ';
}

function apagar(){
    const display = document.querySelector('#display');
    display.value = display.value.slice(0,-1);//Apaga o ultimo valor digitado
}

function resultado(){
    const display = document.querySelector('#display');
    try{
        display.value = eval(display.value)
    } catch{
        display.value = 'Error'
    }
}

//Limpa Display com clique duplo no botão '=' 
function resetarDisplay(){
    const display = document.querySelector('#display');
    display.value = '';
}