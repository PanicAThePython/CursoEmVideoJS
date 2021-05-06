
function gerarTabuada(){
    var num = window.document.getElementById('num')
    var valNum = Number(num.value)
    var resp = window.document.getElementById('tabuada')
    var cont = 0

    if (num.value.length == 0){
        window.alert("Preencha o campo para gerar a tabuada!")
    }else{
        resp.innerHTML = ``
        while(cont<=10){
            var resultado = valNum * cont
            resp.innerHTML+=`${valNum} X ${cont} = ${resultado} \n`
            cont+=1
        }
    }
}
