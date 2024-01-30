function showCatFact(photoId) {
    // Substitua a URL abaixo pela URL da Cat Facts API.
    const catFactsApiUrl = 'https://catfact.ninja/fact?max_length=140';

    // Fazendo uma solicitação fetch para a Cat Facts API.
    fetch(catFactsApiUrl)
        .then(response => response.json())
        .then(data => {
            // Extraindo o fato de gato da resposta.
            const catFact = data.fact;

            // Exibindo a mensagem na div de mensagem.
            document.getElementById('catFactMessage').innerText = catFact;
        })
        .catch(error => {
            console.error('Erro ao obter o fato de gato:', error);
            // Em caso de erro, você pode exibir uma mensagem alternativa ou lidar com a situação de outra forma.
            document.getElementById('catFactMessage').innerText = 'Erro ao obter o fato de gato. Tente novamente mais tarde.';
        });
}
