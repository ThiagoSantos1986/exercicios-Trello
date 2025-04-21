// Utilizando JavaScript, verifique se a senha corresponde as seguintes senhas predefinidas de acesso:

// Comercia = CMCL12 (Usuário) / Com&c1@l;

// RH = 98HR (Usuário) / RH!@2025 ;

// TI = DEV4567TI (Usuário) / IT&&||==2025.


const selectElement = document.getElementById('setor')
const btnSubmit = document.getElementById('btn-submit')
const formulario = document.getElementById('form')


formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const campoUsuario = document.getElementById('usuario').value
    const campoSenha = document.getElementById('senha').value
    const selectedOptionValue = selectElement.options[selectElement.selectedIndex].value;
   

    switch (selectedOptionValue){

        case 'Comercial':
            (campoUsuario === 'CMCL12' && campoSenha === 'Com&c1@l') ? console.log("Usuario e senha Corretos"): console.log("erro, Verifique usuario e senha")
            break
        case 'RH':
            (campoUsuario == '98HR' && campoSenha == 'RH!@2025')? console.log("Usuario e senha Corretos"): console.log("erro, Verifique usuario e senha")
            break
        case 'TI':
            (campoUsuario == 'DEV4567TI' && campoSenha == 'IT&&||==2025') ? console.log("Usuario e senha Corretos"): console.log("erro, Verifique usuario e senha")
            break
        
    }
    
})




