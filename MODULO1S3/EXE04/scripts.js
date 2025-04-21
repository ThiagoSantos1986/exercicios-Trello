let horas_trabalhadas;
let nome_funcionario;
let salario;
let setor;
const valor_por_hora = 10.50

horas_trabalhadas = 240

let horas_extras = horas_trabalhadas > 220 ?  horas_trabalhadas - 220 : false  //if ternario 

nome_funcionario = "João"

setor = "administrativo"


function alterar_salario_base(salario_base,  aumento = 0){
        
    let salario_alterado  = salario_base + (salario_base * aumento)
    
    return salario_alterado
}

function busca_salario_hora(qtd_horas = 220){

    return qtd_horas * valor_por_hora

}

switch (setor){
    
    case "operacional":
        
        if (horas_extras){
         
            salario  = busca_salario_hora() + (busca_salario_hora(horas_extras) * 2)
            
        }else{    
            horas_extras = 0
            salario  = busca_salario_hora(horas_trabalhadas)
        }
        break

    case "administrativo":

        if (horas_extras){
            
            salario = alterar_salario_base(busca_salario_hora(), 0.10)
            
            salario  = salario + (busca_salario_hora(horas_extras) * 2)
        
        }else{ 
            horas_extras = 0
            salario  = alterar_salario_base(busca_salario_hora(horas_trabalhadas) , 0.10)
        }
        break

    case "gerencia":
       
        salario = alterar_salario_base(busca_salario_hora(horas_trabalhadas) , 0.25)
        
        break
}

if (setor === "gerencia"){
    console.log(`O funcionário ${nome_funcionario}, do setor ${setor}, teve ${horas_trabalhadas} horas trabalhadas,\
 Seu salário mensal foi de R$${salario}`)
    }
else{
    console.log(`O funcionário, do setor ${setor}, ${nome_funcionario} teve ${horas_trabalhadas}\
 horas trabalhadas e ${horas_extras} horas extras. Seu salário mensal foi de R$${salario}`)
    }