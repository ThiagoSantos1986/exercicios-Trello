// Utilize arrow function para criar funções de soma e subtração de dois números.


let soma  = (num1, num2) => num1 + num2
let subtracao  = (num1, num2) => num1 - num2
let multiplicacao  = (num1, sum2) => num1 * sum2
let divisao  = (num1, num2) => (num2 !== 0 ? num1/ num2 : "divisor nao pode ser zero!!")

const adicao = document.getElementById('btn-somar')
const subtrair = document.getElementById('btn-subtrair')
const result = document.getElementById('result')


function calcular(operacao){
    
    let num1 = document.getElementById('num1')
    let num2 = document.getElementById('num2')
    
    let msg = `Resultado da ${operacao} entre ${num1.value} e ${num2.value} é :`
    
    if(operacao == '+'){         
        result.innerText =  msg + soma(parseInt(num1.value), parseInt(num2.value))
        return
    }    
    result.innerText = msg + subtracao(parseInt(num1.value), parseInt(num2.value))
       
    
}

adicao.addEventListener('click', function (){
   
    calcular(adicao.value)
    
})

subtrair.addEventListener('click', function (){
    calcular(subtrair.value)
})


