document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    validarEEnviarFormulario();
});

function validarEEnviarFormulario() {
    let mensagens = [];

    let nome = document.getElementById("nome");
    if (nome.value === "") {
        mensagens.push("Nome não informado");
    }

    let email = document.getElementById("email");
    if (email.value === "") {
        mensagens.push("E-mail não informado");
    }

    let telefone = document.getElementById("telefone");
    if (telefone.value === "") {
        mensagens.push("Telefone não informado");
    }

    if (mensagens.length > 0) {
        alert(mensagens.join("\n"));
    } else {
        enviarFormulario();
    }
}

function enviarFormulario() {

    let dadosFormulario = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value
    };

    console.log('Dados do formulário:', dadosFormulario);
    document.getElementById('formulario').style.display = 'none';
    document.getElementById('mensagem').style.display = 'block';
}
