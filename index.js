document.querySelector('.btn-enviar').addEventListener('click', function (event) {
    event.preventDefault(); 

    const campos = document.querySelectorAll('.formulario input, .formulario textarea');
    let formularioValido = true;

    campos.forEach(campo => {
        const mensagemErro = campo.nextElementSibling.querySelector('.paragrafo-vermelho');
        
        if (campo.value.trim() === '') {
            campo.style.border = '1px solid #F52E2E';
            mensagemErro.style.display = 'block';
            formularioValido = false;
        } else {
            campo.style.border = '1px solid #00C22B';
            mensagemErro.style.display = 'none';
        }
    });
});
