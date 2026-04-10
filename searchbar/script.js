// 1. Array de Objetos (Nossos Dados)
const produtos = [
    { nome: "Placa de Vídeo RTX 3060", preco: "R$ 2.500", categoria: "GPU" },
    { nome: "Processador Ryzen 7", preco: "R$ 1.800", categoria: "CPU" },
    { nome: "Memória RAM 16GB", preco: "R$ 450", categoria: "RAM" },
    { nome: "SSD NVMe 1TB", preco: "R$ 600", categoria: "Armazenamento" },
    { nome: "Monitor Gamer 144Hz", preco: "R$ 1.200", categoria: "Monitor" },
    { nome: "Teclado Mecânico RGB", preco: "R$ 300", categoria: "Periférico" }
];

const grid = document.getElementById('lista-produtos');
const inputBusca = document.getElementById('busca');

// 2. Função para desenhar os cards na tela
function renderizar(lista) {
    // Limpa o grid antes de desenhar (Crucial para não duplicar!)
    grid.innerHTML = "";

    // Se a lista estiver vazia, mostra o aviso (Desafio Extra)
    if (lista.length === 0) {
        grid.innerHTML = "<p>Putz! Não encontramos esse componente no estoque. 😕</p>";
        return;
    }

    // Percorre a lista e cria o HTML de cada card
    lista.forEach(item => {
        const cardHTML = `
            <div class="card">
                <span class="categoria">${item.categoria}</span>
                <h3>${item.nome}</h3>
                <p class="preco">${item.preco}</p>
            </div>
        `;
        grid.innerHTML += cardHTML;
    });
}

// 3. Evento de Busca (Input)
inputBusca.addEventListener('input', () => {
    const termo = inputBusca.value.toLowerCase();

    // Filtra o array original baseado no que foi digitado
    const produtosFiltrados = produtos.filter(p => {
        return p.nome.toLowerCase().includes(termo);
    });

    // Redesenha a tela apenas com os filtrados
    renderizar(produtosFiltrados);
});

// Inicialização: Desenha todos os produtos ao abrir a página
renderizar(produtos);
