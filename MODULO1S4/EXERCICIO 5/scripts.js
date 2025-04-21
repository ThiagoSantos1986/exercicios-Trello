// [1] Somar dois números;

// [2] Subtrair dois números;

// [3] Buscar quantidade números pares;

// [4] Buscar quantidade números impares;

// [5] Buscar quantidade números primos;

// [6] Sair.


let soma  = (num1, num2) => num1 + num2
let subtracao  = (num1, num2) => num1 - num2
let multiplicacao  = (num1, sum2) => num1 * sum2
let divisao  = (num1, num2) => (num2 !== 0 ? num1/ num2 : "divisor nao pode ser zero!!")


function multiFuncoesCalculadora(){
    let continuar = true
    
    while (continuar) {

        
        console.log("\n[1] Somar dois números")
        console.log("[2] Subtrair dois números")
        console.log("[3] Buscar quantidade números pares")
        console.log("[4] Buscar quantidade números impares")
        console.log("[5] Buscar quantidade números primos")
        console.log("[6] Sair")

        const opcao = prompt("DIGITE O NUMERO DA OPÇÃO DESEJADA.")

        if(opcao == 6){
            console.log("\nSAINDO DO SISTEMA..💻")
            continuar = false
            break
        }
       
        switch (opcao){

            case '1':
                console.log(`\nO resultado da Soma é: ${calcular('+')}\n `)
                break
            case '2':
                console.log(`\nO resultado da Subtração é: ${calcular('-')}\n `)
                break
            case '3':
                console.log(`\nA quantidade de Numeros pares é: ${qtdeNumerosParesOuImpares()}\n `)
                break
            case '4':
                console.log(`\nA quantidade de Numeros Impares é: ${qtdeNumerosParesOuImpares('impar')}\n `)
                break
            case '5':
                console.log(`\nA quantidade de Numeros Primos é: ${qtdeNumerosPrimos()}\n `)
                break
            default:
                console.log("opção invalida")
        }
    }    

}

function calcular(operacao){
    
    let num1  = parseInt(prompt("Digite o primeiro Numero: "))
    let num2  = parseInt(prompt("Digite o segundo Numero: "))

    if(operacao == '+'){      

        return soma(parseInt(num1), parseInt(num2))
    }    
    
    return subtracao(parseInt(num1), parseInt(num2))
}

function qtdeNumerosParesOuImpares(ope = String("par")){

    let num  = parseInt(prompt("Digite um Numero Inteiro: "))
    
    let contPar = 0
    let contImpar = 0
   
    for(let i = 1; i <= num; i++){
        
        i % 2 === 0 ? contPar++ : contImpar++
    }
    
    return ope == "par" ? contPar : contImpar
}

function qtdeNumerosPrimos(){
    
    let num  = parseInt(prompt("Digite um Numero Inteiro: "))
    let quantidade = 0

    for(let n = 2; n <= num; n++){
        let contador = 0
        
        for(let x = 1; x <= n ; x++){
            
            n % x == 0 ? contador++ : null          
        }
        if (contador == 2){
            quantidade++
        }
    }
    return quantidade
}

multiFuncoesCalculadora()