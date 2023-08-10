# Trabalhando com Tipografia em CSS

Neste guia, vamos explorar como escolher e estilizar fontes de texto em CSS para melhorar a legibilidade e o design das suas páginas web.

## Escolhendo Fontes

A escolha das fontes certas pode ter um grande impacto na aparência e na legibilidade do seu conteúdo.

### Fontes da Web

```css
/* Exemplo de fonte da web */
body {
  font-family: 'Helvetica', sans-serif;
}
```

### Fontes Importadas

```css
/* Exemplo de fonte importada */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

body {
  font-family: 'Open Sans', sans-serif;
}
```

## Estilizando Texto

Além da escolha da fonte, você pode estilizar o texto para melhorar sua aparência.

### Tamanho da Fonte

```css
/* Exemplo de tamanho de fonte */
h1 {
  font-size: 32px;
}

p {
  font-size: 16px;
}
```

### Espaçamento entre Linhas

```css
/* Exemplo de espaçamento entre linhas */
p {
  font-size: 18px;
  line-height: 1.5;
}
```

### Estilos de Texto

```css
/* Exemplo de estilo de texto */
.bold-text {
  font-weight: bold;
}

.italic-text {
  font-style: italic;
}

.underline-text {
  text-decoration: underline;
}
```

## Exemplo Interativo - Tipografia

```html
<!DOCTYPE html>
<html>
<head>
<style>
  body {
    font-family: 'Arial', sans-serif;
    font-size: 18px;
    line-height: 1.6;
  }
  
  h1 {
    font-size: 36px;
    margin-bottom: 20px;
  }
  
  .highlight {
    font-weight: bold;
    color: #007bff;
  }
</style>
</head>
<body>

<h1>Explorando Tipografia em CSS</h1>
<p>Este é um exemplo de como estilizar <span class="highlight">texto</span> em HTML e CSS.</p>

</body>
</html>
```

Neste exemplo, você verá como estilizar fontes, tamanhos, espaçamento e estilos de texto em um contexto real.

---

Sinta-se à vontade para copiar e colar esses exemplos em um arquivo HTML para ver os resultados por conta própria. O Markdown acima serve como um guia introdutório para entender e aplicar técnicas de tipografia em CSS.
