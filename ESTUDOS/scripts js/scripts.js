let setor;
let horas_extras;
let horas_trabalhadas;
let nome_funcionario;
let salario;
const valor_por_hora = 10.50

horas_trabalhadas = 230

nome_funcionario = "João"

setor = "administrativo"


// let calculo_base  =  (horas_trabalhadas + horas_extras) * valor_por_hora

if (horas_trabalhadas > 220){
    
    horas_extras = horas_trabalhadas - 220
    let salario_extra = (horas_trabalhadas - 220) * (valor_por_hora * 2) 
    salario  = (220 * valor_por_hora) + salario_extra

}else{
    horas_extras = 0
    salario  = horas_trabalhadas * valor_por_hora
}

console.log(`O funcionário, do setor ${setor}, ${nome_funcionario} teve ${horas_trabalhadas}
horas trabalhadas e ${horas_extras} horas extras. Seu salário mensal foi de R$${salario},00.`)