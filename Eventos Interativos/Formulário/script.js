document.getElementById("contactForm").onsubmit = function(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (!name) {
        document.getElementById("nameError").style.display = "block";
        event.preventDefault(); // Impede o envio do formulário se o nome estiver em branco
    } else {
        document.getElementById("nameError").style.display = "none";
    }

    if (!email || !isValidEmail(email)) {
        document.getElementById("emailError").style.display = "block";
        event.preventDefault(); // Impede o envio do formulário se o email estiver em branco ou inválido
    } else {
        document.getElementById("emailError").style.display = "none";
    }
};

function isValidEmail(email) {
    // Expressão regular para verificar se o email é válido
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}