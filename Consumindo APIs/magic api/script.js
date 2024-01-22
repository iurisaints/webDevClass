document.addEventListener('DOMContentLoaded', () => {
    const cardListElement = document.getElementById('cardList');

    // Substitua o endpoint com o que você deseja da documentação da Scryfall API
    const apiEndpoint = 'https://api.scryfall.com/cards/random';

    // Função para buscar e exibir cartas
    const fetchAndDisplayCards = async () => {
        try {
            for (let i = 0; i < 3; i++) {
                const response = await fetch(apiEndpoint);
                const cardData = await response.json();

                // Crie um elemento de carta para exibição
                const cardElement = document.createElement('div');
                cardElement.classList.add('card');
                cardElement.innerHTML = `
                    <h3>${cardData.name}</h3>
                    <img src="${cardData.image_uris.normal}" alt="${cardData.name}">
                `;

                // Adicione a carta à lista
                cardListElement.appendChild(cardElement);
            }
        } catch (error) {
            console.error('Erro ao buscar carta:', error);
        }
    };

    // Busque e exiba três cartas ao carregar a página
    fetchAndDisplayCards();
});
