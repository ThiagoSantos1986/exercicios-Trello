// Desenvolva uma função onde você receberá um número inteiro e, ela, lhe 
// retornará quantos números impares existem até a chegada do número informado. 
// Utilize a estrutura de repetição de sua preferência.

// Ex.: Informo 10 e o retorno será 5 (que é a quantidade de números primos (1, 3, 5, 7 e 9).

const input = document.getElementById('input-id')
const lista = document.getElementById('lista')
let para = document.createElement('span')
let listaImpares = new Array()
let listaPares = new Array()

input.addEventListener('change', function(){

    listaImpares = []
    
    console.log(input.value)
    
    for(let i = 0; i <= input.value; i++){
    
        (i % 2 != 0) ? listaImpares.push(i) : listaPares.push(i)
        
    }
    para.innerText = `\nO Numero digitado foi ${input.value}
    A Quantidade de numeros Impares é ${listaImpares.length}.
    e os numeros impares sao: ${listaImpares}.`

    lista.appendChild(para)
    input.value = ''
})

function minhaFuncao() {
    
    window.location.reload(); // Recarrega a página
}


// console.log(`A Quantidade de numeros Impares é ${listaImpares.length}.\ne os numeros impares sao: ${listaImpares}`)
// console.log(`A Quantidade de numeros Pares é ${listaPares.length}.\ne os numeros pares sao: ${listaPares}`)

