var area = document.getElementById("area")

    area.addEventListener('mouseenter',entrou)
    area.addEventListener('click' , clicar)
    area.addEventListener('mouseout', saiu)

function entrou(){
    area.innerText = 'Entrou!'
    area.style.background = 'blue'
}
function clicar() {
    area.innerText = 'Clicou!'
    area.style.background = 'green'
    
}
function saiu(){
    area.innerText = 'Saiu!'
    area.style.background = '#c43535'
    
}

