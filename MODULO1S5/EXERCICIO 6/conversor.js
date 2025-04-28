
const form = document.getElementById('form')
const result = document.getElementById('result')


form.addEventListener('submit', (e)=> {
    e.preventDefault()
    const input_numero = document.getElementById('num-decimal')
    
    let dividendo  = input_numero.value
    let divisor = 2 
    let resto = 0
    let quociente = 0
    let resultado = ''
    
    
    do{
    
        quociente = dividendo / divisor
       
        resto = parseInt(dividendo % divisor)
    
        if (resto === 1){
            dividendo = Math.floor(quociente)
            resultado += resto
            continue
        }else{
            dividendo = quociente
            resultado += resto
        }
    
    }while(dividendo >= 1)

    resultado = resultado.split('').reverse().join('')
    
    result.innerHTML = `<h2><strong>${resultado}</strong></h2>`



})





    


// // console.log(`resultado ${resultado.split('').reverse().join('')}`)
// console.log(resultado)


// for(let i = 0; i <= resultado.length -1; i++){
    
//     cont.unshift(2**i)
// }
// console.log(cont)