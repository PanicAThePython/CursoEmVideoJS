
function contar(){
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var resposta = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("Preencha todos os campos para calcular!")
    }

    var valIn = Number(inicio.value)
    var valFim = Number(fim.value)
    var valPas = Number(passo.value)

    resposta.innerHTML = ``
    var contador = valIn

    if(valPas==0){
        valPas = 1
    }

    if(valIn < valFim){
        while(contador <= valFim){
            resposta.innerHTML+=` ${contador} &#128073;`
            contador +=valPas;
        }
        resposta.innerHTML+=`&#127988;`    
    }
    else{
        while(contador >= valFim){
            resposta.innerHTML+=` ${contador} &#128073;`
            contador -=valPas;
        }
        resposta.innerHTML+=`&#127988;`
    }
}
