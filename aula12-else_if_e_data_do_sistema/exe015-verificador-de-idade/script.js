function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var resultado = document.getElementById('resultado')
    if (fano.value.length == 0 || fano.value > ano) {
      window.alert('Verifique os dados inseridos e tente novamente!')
    } else { 
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var fase = ''
       var img = document.createElement('img')
       img.setAttribute('id' , 'foto')
       if (fsex[0].checked) {
           fase = 'homem'
           if (idade >=0 && idade < 10) {
               fase = "criança"
               img.setAttribute('src' , 'foto-bebe-menino.png')
           } else if (idade < 21) {
                fase = 'jovem'
               img.setAttribute('src' , 'foto-jovem-homem.png')
           } else if (idade < 50) {
               fase = 'adulto'
               img.setAttribute('src' , 'foto-adulto.png')
           } else {
                 fase = 'idoso'
               img.setAttribute('src' , 'foto-idoso.png')
           }
        
        } else if (fsex[1].checked) {
                fase = 'adulta'
            if (idade >=0 && idade < 10) {
                fase = 'criança'
                img.setAttribute('src' , 'foto-bebe-menina.png')
            } else if (idade < 21) {
                fase = 'jovem'
                img.setAttribute('src' , 'foto-jovem-menina.png')
            } else if (idade < 50) {
                fase = 'adulta'
                img.setAttribute('src' , 'foto-adulta.png')
            } else {
                fase = 'idosa'
                img.setAttribute('src' , 'foto-idosa.png')
            }

        }
        resultado.style.textAlign = 'center'
        
        resultado.innerHTML = `Detectamos ${fase} com ${idade} anos.`
        resultado.appendChild(img)
       }
    }

       


