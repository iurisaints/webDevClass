let imc = (peso, altura) => peso / (altura * altura);

let peso = Number(prompt("Nos diga o seu peso em quilos: "));
let altura = Number(prompt("Nos diga a sua altura em metro: "));

alert(`Seu IMC é ${imc(peso, altura)}`)