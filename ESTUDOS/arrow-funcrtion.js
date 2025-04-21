let soma  = (num1, num2) => num1 + num2
let subtracao  = (num1, num2) => num1 - num2
let multiplicacao  = (num1, sum2) => num1 * sum2
let divisao  = (num1, num2) => (num2 !== 0 ? num1/ num2 : "divisor nao pode ser zero!!")


function calculadora(){
    let continuar = true
    
    
    while (continuar) {
        
        console.log("[0] SAIR")
        console.log("[1] SOMAR")
        console.log("[2] SUBTRAIR")
        console.log("[3] MULTIPLICAR")
        console.log("[4] DIVIDIR")

        const opcao = prompt("DIGITE O NUMERO DA OPÇÃO DESEJADA.")

        if(opcao == 0){
            console.log("saindo da calculadora")
            continuar = false
            break
        }

        let num1  = parseInt(prompt("Digite o primeiro Numero: "))
        let num2  = parseInt(prompt("Digite o segundo Numero: "))

        let resultado;

        switch (opcao){
            case '1':
                resultado = soma(num1, num2)
                console.log(`O resultado da Soma e ${resultado}\n `)
                break
            case '2':
                resultado = subtracao(num1, num2)
                console.log(`O resultado da Subtração e ${resultado}\n `)
                break
            case '3':
                resultado = multiplicacao(num1, num2)
                console.log(`O resultado da Multiplicação é ${resultado}\n `)
                break
            case '4':
                resultado = divisao(num1, num2)
                console.log(`O resultado da Divisao e ${resultado}\n `)
                break
            default:
                console.log("opção invalida")
        }
    }    

}


calculadora()