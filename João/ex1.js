let dezoito = (nasci, atual) => idade >= 18;

let idade = Number(prompt("Nos diga a sua idade: "));

if(dezoito(idade)){
    alert(`Você pode entrar na festa!`);
}else{
    alert(`Você não pode entrar na festa.`);
}