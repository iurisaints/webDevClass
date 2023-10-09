let user = (loguser) => loguser == "admin";
let pass = (logpass) => logpass == "a1b2c3d4e5";

let loguser = prompt("Nos diga o seu username: ");
let logpass = prompt("Nos diga a sua senha: ");

if(user(loguser) && pass(logpass)){
    alert(`Seja bem-vindo!`);
}else{
    alert(`Usuário e/ou senha inválidos.`);
}