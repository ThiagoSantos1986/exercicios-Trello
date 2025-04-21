// Utilizando JavaScript, verifique se a senha corresponde as seguintes senhas predefinidas de acesso:

// Comercia = CMCL12 (Usuário) / Com&c1@l;

// RH = 98HR (Usuário) / RH!@2025 ;

// TI = DEV4567TI (Usuário) / IT&&||==2025.


const selectElement = document.getElementById('setor')
const btnSubmit = document.getElementById('btn-submit')
const formulario = document.getElementById('form')
const divStatus = document.getElementById('div-status');


formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const campoUsuario = document.getElementById('usuario').value
    const campoSenha = document.getElementById('senha').value
    const selectedOptionValue = selectElement.options[selectElement.selectedIndex].value;
    

    switch (selectedOptionValue){

        case 'Comercial':
            (campoUsuario === 'CMCL12' && campoSenha === 'Com&c1@l') ? login('success'): login('error')
            break

        case 'RH':
            (campoUsuario === '98HR' && campoSenha === 'RH!@2025')? login('success'): login('error')
            break
        
        case 'TI':
            (campoUsuario === 'DEV4567TI' && campoSenha === 'IT&&||==2025') ? login('success') : login('error')
            break
        
    }

    function login(status){
       
        if(status == 'success'){
            divStatus.style.backgroundColor = "green"
            divStatus.innerHTML = `<p>LOGIN REALIZADO COM SUCESSO</p>`
            return
        }
        divStatus.style.backgroundColor = "red"
        divStatus.innerHTML = `<p>Campos USUARIO ou SENHA estao incorretos para o setor Escolhido </p>`
    
    }

})


divStatus.addEventListener('click', () => {
    divStatus.style.display = 'none'
})
