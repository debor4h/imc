function calcular(){
    peso = document.getElementById('peso').value //pegando o valor
    altura = document.getElementById('altura').value
    msg = document.getElementById('msg')
    indice = document.getElementById('imc')

    imc = Number(peso/(altura*altura))//convertendo

    if(peso.length == 0 || altura.length == 0){
        alert('ERRO! Por favor preencha os campos e tente novamente.')
    }else if(peso < 0 || altura < 0){
        alert('Altura e peso tem que ser um valor positivo!')
    }else{
        if(imc<18.5){
            msg.innerHTML =`Abaixo do peso.`
        }else if(imc<=24.9){
            msg.innerHTML =`Peso Normal.`
        }else if(imc<=29.9){
            msg.innerHTML = `Sobrepeso.`
        }else if(imc<34.9){
            msg.innerHTML =`Obesidade Grau 1.`
        }else if(imc<39.9){
            msg.innerHTML = `Obesidade Grau 2.`
        }else{
             msg.innerHTML = `Obesidade Grau 3.`
        }
        indice.innerHTML =`<strong>IMC</strong> de ${imc.toFixed(2)}`
    }
}
function horaData(){
    dataAtual = new Date();
    var horario = document.getElementById('horas')
    var data = document.getElementById('data')
    
    dia = dataAtual.getDate().toString().padStart(2,'0')
    mes = (dataAtual.getMonth()+1).toString().padStart(2,'0')
    ano = dataAtual.getFullYear()
    
    hora = dataAtual.getHours().toString().padStart(2,'0')
    minutos = dataAtual.getMinutes().toString().padStart(2,'0')
    segundos = dataAtual.getSeconds().toString().padStart(2,'0')

    data.innerHTML =`${dia}/${mes}/${ano}`
    horario.innerHTML = `${hora}:${minutos}:${segundos} `
    setTimeout('horaData()',1000); 
}
