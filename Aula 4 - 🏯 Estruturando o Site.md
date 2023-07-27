<h1> Padrão e Boas-práticas </h1>

Olá! Hoje é dia de fazer uma faxina no nosso código!

**Identação**
Você tem duas alternativas:
<ol>
  <li> Observe seu código e organize na mão as cascatas de tags </li>
  <li> Você pode instalar a extensão Prettier, selecionar seu código e formatar com essa extensão utilizando a funcionalidade da linguagem que você deseja!
 </li>
</ol>

**CSS on Stylesheet**
No seu projeto, você utiliza a tag <style> para estilizar seu site, o melhor a se fazer é criar um arquivo chamado style.css e colocar todo o CSS lá!
Mas professor e se eu estilizei as páginas conforme cada necessidade?
Lembra quando eu disse em aula que deveria utilizar IDs únicos para cada tag? Então, agora é a hora desses ids entrarem em ação!
Todo o CSS será realocado em um arquivo e será utilizado por todas as páginas HTML do seu projeto.
Aqui está como invocá-lo no seu site:
```html
<link rel="stylesheet" href="style.css">
```
Agora só colocar isso em todas as páginas e organizar seu css aí dentro, manda ver!

**Padronização de Pastas**
Você deve utilizar um padrão para o seu site em relação as pastas. O que são códigos principais como index.html e páginas que estão dentro do seu site devem ficar na pasta raiz para melhor entendimento da estrutura.
Para imagens, deve ter uma pasta chamada 'images', o style.css e afins deve estar numa pasta chamada 'styles' etc...
Seja criativo e utilize isso para melhor a estrutura do seu código.
