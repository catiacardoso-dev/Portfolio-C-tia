document.getElementById("contactForm").addEventListener("submit",  function(event) {let valid = true;


// Limpar mensagem de erro
document.getElementById("errorNome").textContent = "";
document.getElementById("errorEmail").textContent = "";
document.getElementById("errorMensagem").textContent = "";

// Obter os valores dos campos
let nome = document.getElementById("nome").value.trim();
let email = document.getElementById("email").value.trim();
let mensagem = document.getElementById("mensagem").value.trim();

// Validação do nome
if (nome=== "") {
    document.getElementById("errorNome").textContent = "O nome é obrigatório.";valid = false;
}

// Validação do email
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
(!emailRegex.test(email)) {
     document.getElementById("errorEmail").textContent = "Introduza um email válido.";valid = false;
     }

     // Validação da mensagem
   if (mensagem.length < 10) {
    document.getElementById("errorMensagem").textContent = "A mensagem deve ter pelo menos 10 caracteres.";valid = false;
    }

    // Se houver erro, impedir envio
    if (!valid) {
        event.preventDefault();
        } else {
            alert("Formulário enviado com sucesso!");
        }
{);

