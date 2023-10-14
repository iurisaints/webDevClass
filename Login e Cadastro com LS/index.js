function login() {
    //variáveis que salvam o prompt do HTML
    const email = document.getElementById('login-email').value;
    const senha = document.getElementById('login-senha').value;

    //recupera os dados de cadastro do localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    //verifica se o email e senha corresponde a um usuário
    const user = users.find(u => u.email === email && u.senha === senha);

    if(user){
        document.getElementById('result').innerHTML = 'Login bem-sucedido';
    } else {
        document.getElementById('result').innerHTML = 'Login falhou';
    }
}

function register() {
    //variáveis que salvam o prompt do HTML
    const email = document.getElementById('register-email').value;
    const senha = document.getElementById('register-senha').value;

    //recupera os dados de cadastro do localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    //registra o email e a senha no banco de dados
    users.push({email, senha})

    //salva a lista atualizada de usuários no localStorage
    localStorage.setItem('users', JSON.stringify(users))

    document.getElementById('result').innerHTML = 'Cadastro bem-sucedido'
}