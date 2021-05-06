let numeros = []

function verificarExistencia(numero){
    for (i = 0; i < numeros.length; i++){
        if (numero == numeros[i]){
            return true
        }
    }
    return false
}

function adicionarDado(){
    var entrada = window.document.getElementById('num')
    var valor = Number(entrada.value)
    var listagem = window.document.getElementById('numeros')

    
    if (verificarExistencia(valor)){
        window.alert('Verifique o valor de entrada! Não pode repetido!!')
    }
    else if(entrada.value.length == 0){
        window.alert('Verifique o valor de entrada! Não pode ser vazio!!')
    }
    else{
        if (valor < 1 || valor > 100){
            window.alert('O valor está fora do intervalo!!')
        }
        else{
            numeros.push(valor)
            listagem.innerHTML+=`Valor ${valor} adicionado\n`
        }
    }

    entrada.value = ''
    entrada.focus()
}

function verificarMaior(){
    var maior = 0
    for (i = 0; i < numeros.length; i++){
        if (numeros[i] > maior){
            maior = numeros[i]
        }
    }
    return maior
}

function verificarMenor(){
    var menor = verificarMaior()
    for (i = 0; i < numeros.length; i++){
        if (numeros[i] < menor){
            menor = numeros[i]
        }
    }
    return menor
}

function somarDados(){
    var valorTotal = 0
    for (i = 0; i < numeros.length; i++){
        valorTotal+=numeros[i]
    }
    return valorTotal
}

function calcularMedia(){
    return (somarDados()/numeros.length)
}

function verificarDados(){
    var listagem = window.document.getElementById('numeros')

    if(listagem.value.length == 0){
        window.alert('Insira valores na lista antes de verificar!!')
    }
    else{
        var maior = verificarMaior()
        var menor = verificarMenor()
        var soma = somarDados()
        var media = calcularMedia()

        var resp = window.document.getElementById('resp')

        resp.innerHTML = ""

        var p1 = window.document.createElement("p")
        var p2 = window.document.createElement("p")
        var p3 = window.document.createElement("p")
        var p4 = window.document.createElement("p")
        var p5 = window.document.createElement("p")

        p1.innerHTML = `Ao todo, temos ${numeros.length} números cadastrados.\n`
        p2.innerHTML = `O maior valor informado foi ${maior}.\n`
        p3.innerHTML = `O menor valor informado foi ${menor}.\n`
        p4.innerHTML = `Somando todos os valores, temos ${soma}.\n`
        p5.innerHTML = `A média dos valores digitados é ${media}.`

        resp.appendChild(p1)
        resp.appendChild(p2)
        resp.appendChild(p3)
        resp.appendChild(p4)
        resp.appendChild(p5)
    }
}