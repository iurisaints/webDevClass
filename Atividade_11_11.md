**Assunto: Catálogo de Livros Online**

**Enunciado:**
Você foi designado para desenvolver uma API REST para gerenciar um catálogo de livros online. A API deverá fornecer operações de CRUD (Create, Read, Update, Delete) para manipulação dos dados do catálogo. A estrutura básica de um livro incluirá um ID, título, autor, ano de publicação e gênero.

**1. Rota para Listar Todos os Livros (GET):**
Implemente uma rota que permita a recuperação de todos os livros disponíveis no catálogo. A resposta deve incluir detalhes como o ID, título, autor, ano de publicação e gênero de cada livro.

**Critérios de Avaliação:**
- Implementar a rota GET `/livros` para listar todos os livros.
- Retornar um JSON com detalhes (ID, título, autor, ano de publicação, gênero) de cada livro.

**2. Rota para Adicionar um Novo Livro (POST):**
Crie uma rota que permita a adição de novos livros ao catálogo. Os dados necessários incluem título, autor, ano de publicação e gênero. Garanta que a API valide os dados e retorne uma mensagem indicando o sucesso ou falha da operação.

**Critérios de Avaliação:**
- Implementar a rota POST `/livros` para adicionar novos livros.
- Validar os dados do livro e retornar uma mensagem de sucesso ou falha.

**3. Rota para Atualizar Informações de um Livro (PUT):**
Desenvolva uma rota que permita a atualização das informações de um livro específico. A rota deve aceitar o ID do livro e os novos dados (título, autor, ano de publicação, gênero).

**Critérios de Avaliação:**
- Implementar a rota PUT `/livros/:id` para atualizar as informações de um livro.
- Aceitar o ID do livro e os novos dados como parâmetros.

**4. Rota para Remover um Livro do Catálogo (DELETE):**
Crie uma rota que permita a remoção de um livro do catálogo com base no seu ID. A API deve responder indicando se o livro foi removido com sucesso.

**Critérios de Avaliação:**
- Implementar a rota DELETE `/livros/:id` para deletar um livro.
- Responder indicando se o livro foi removido com sucesso.

**5. Consulta por Gênero (GET):**
Adicione uma rota que permita a consulta de livros por gênero. A rota deve aceitar o gênero como parâmetro e retornar os livros correspondentes.

**Critérios de Avaliação:**
- Implementar a rota GET `/livros/consulta/:genero` para consultar livros por gênero.
- Aceitar o gênero como parâmetro.

**6. Testes e Documentação:**
Realize testes abrangentes para garantir o funcionamento correto de cada rota. Além disso, forneça uma documentação clara descrevendo como usar a API, incluindo os parâmetros necessários para cada operação.

**Critérios de Avaliação:**
- Testes abrangentes para cada rota.
- Documentação clara e informativa sobre o uso da API.



DESAFIOS COM A API:

Além das operações básicas de CRUD (Create, Read, Update, Delete) que foram abordadas nos enunciados anteriores, existem várias outras funções que podem ser implementadas em uma API, dependendo dos requisitos específicos do sistema. Aqui estão algumas sugestões adicionais de funcionalidades que poderiam ser incorporadas à API de Catálogo de Livros Online:

**1. Pesquisa por Título ou Autor (GET):**
   - Adicione uma rota que permita a pesquisa de livros por título ou autor. Isso proporcionaria aos usuários a capacidade de encontrar livros específicos de maneira mais eficiente.

**2. Ordenação de Livros (GET):**
   - Implemente uma rota que permita a ordenação dos livros com base em critérios como título, autor, ano de publicação, etc. Os usuários poderiam escolher a ordem desejada para visualizar os resultados.

**3. Estatísticas do Catálogo (GET):**
   - Adicione uma rota que forneça estatísticas sobre o catálogo, como o número total de livros, o número de livros por gênero, a média de anos de publicação, etc.

**4. Comentários e Avaliações (POST, GET):**
   - Permita que usuários adicionem comentários e avaliações aos livros. Isso poderia ser feito por meio de rotas de POST para adicionar comentários e GET para recuperar as avaliações.

**5. Destaques e Recomendações (GET):**
   - Crie uma rota que forneça livros em destaque ou recomendações com base em critérios como popularidade, novidades ou preferências do usuário.

**6. Controle de Acesso (Autenticação e Autorização):**
   - Implemente autenticação e autorização para garantir que certas operações, como adição, atualização ou exclusão de livros, sejam realizadas apenas por usuários autorizados.

**7. Paginação (GET):**
   - Se o catálogo de livros for extenso, adicione suporte à paginação para melhorar o desempenho e a experiência do usuário ao navegar pelos resultados.

**8. Exportação de Dados (GET):**
   - Forneça uma rota que permita aos usuários exportar dados do catálogo em diferentes formatos, como CSV ou JSON, para análises externas.

Essas são apenas algumas ideias, e a escolha de quais funcionalidades adicionar dependerá dos requisitos específicos do sistema e das necessidades dos usuários.
