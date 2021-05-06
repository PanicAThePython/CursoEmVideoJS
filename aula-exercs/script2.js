
function verificar(){
    
    var data = new Date()
    var ano = data.getFullYear()
    var txtano = window.document.getElementById('ano')
    var resposta = window.document.getElementById('res')

    if (txtano.value.length == 0 || Number(txtano.value) > ano){
        window.alert("Confira os dados do formulário!")
    }
    else{
        var sexo = window.document.getElementsByName('sexo')
        var genero = ''
        var idade = ano - Number(txtano.value);
        //var img = document.createElement('img')
        //img.setAttribute('id', 'foto')
        var p = document.createElement('p')
        p.innerHTML = `Foi detectado ${genero} com ${idade} anos.`

        if (sexo[0].checked){
            genero = 'Homem'
        }
        else{
            genero = 'Mulher'
        }
        resposta.style.textAlign = 'center'
        //resposta.innerHTML = `Foi detectado ${genero} com ${idade} anos.`
        resposta.appendChild(p)
    }
}
