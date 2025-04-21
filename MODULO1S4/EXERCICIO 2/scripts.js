// Desenvolva uma função onde você receberá um número inteiro e, ela, lhe 
// retornará quantos números pares existem até a chegada do número informado. 
// Utilize a estrutura de repetição DO WHILE/WHILE (exclua o número 0 da conta).

// Ex.: Informo 10 e o retorno será 5 (que é a quantidade de números pares (2, 4, 6, 8 e 10).

// FUNCAO COM DO WHILE
function  qtde_numeros_pares(num){
        let passo = 1
        let contador  = 0

    do{
        if (passo % 2 === 0){

            contador++
       } 
        passo++
       
    }while(passo <= num)

    return contador
}


let numero = 20

console.log(`Existe ${qtde_numeros_pares(numero)} Numeros pares ate a chegada do Valor ${numero}.`)



// FUNCAO COM WHILE
function qtde_numeros_pares2(num){
    let cont = 0
    let passo = 1
    
    while(passo <= num){
        
        if (passo % 2 === 0){
            cont++
        }    
        passo++
    }
    return cont
}


let numero1 =  50
console.log(`Existe ${qtde_numeros_pares2(numero1)} Numeros pares ate a chegada do Valor ${numero1}.`)