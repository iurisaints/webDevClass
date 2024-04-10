// Evento onclick
document.getElementById("clickButton").onclick = function() {
    alert("Você clicou no botão!");
};

// Evento onhover
document.getElementById("hoverText").onmouseover = function() {
    this.style.color = "red";
};

document.getElementById("hoverText").onmouseout = function() {
    this.style.color = "black";
};

// Evento onkeyup
document.getElementById("keyupInput").onkeyup = function(event) {
    alert("Você pressionou a tecla: " + event.key);
};

//Evento onsubmit
document.getElementById("myForm").onsubmit = function(event) {
    var nameInput = document.getElementById("nameInput").value;
    if (!nameInput) {
        alert("Por favor, insira seu nome antes de enviar o formulário.");
        event.preventDefault(); // Impede o envio do formulário se o nome estiver em branco
    }
};