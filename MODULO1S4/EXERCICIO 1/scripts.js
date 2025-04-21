let teste = document.querySelector('span')
let div_lista = document.getElementById('div-lista')
let num = document.getElementById('input_number')
const lista = document.createElement('ul')

let mylist = []

function vericarPrimos(){
    
    mylist = []
    lista.innerHTML = ''

    let quantidade = 0
   
    for(let n = 2; n <= num.value; n++){
        let contador = 0
        
        for(let x = 1; x <= n ; x++){
            if(n % x == 0){
                contador++          
            }
        }
        if (contador == 2){
            mylist.push(n)
            quantidade++
        }

    }
    teste.innerText = `A quantidade de Numeros Primos ate chegar no numero ${num.value} é de ${quantidade} numeros.`
    
    mylist.forEach(element => {
            
        const item = document.createElement('li')

        item.innerText = element

        lista.appendChild(item)
    
    });
    div_lista.innerHTML = '<p>Sao eles:</p>'
    div_lista.appendChild(lista)
    
    
} 

