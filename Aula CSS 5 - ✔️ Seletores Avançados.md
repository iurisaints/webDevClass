# Seletores Avançados em CSS

Neste guia, vamos explorar seletores avançados em CSS, permitindo um controle mais preciso sobre a estilização dos elementos.

## Seletores de Combinação

Os seletores de combinação permitem estilizar elementos com base em sua relação com outros elementos.

### Descendant (Descendente)

```css
/* Exemplo de seletor descendant */
.container p {
  color: #007bff;
}
```

### Child (Filho)

```css
/* Exemplo de seletor child */
.container > p {
  font-weight: bold;
}
```

## Pseudo-classes

As pseudo-classes permitem estilizar elementos com base em estados específicos.

### :hover (Hover)

```css
/* Exemplo de pseudo-classe :hover */
.button:hover {
  background-color: #00cc99;
}
```

### :nth-child

```css
/* Exemplo de pseudo-classe :nth-child */
.list li:nth-child(odd) {
  background-color: #f7f7f7;
}
```

## Pseudo-elementos

Os pseudo-elementos permitem estilizar partes específicas de um elemento.

### ::before (Antes)

```css
/* Exemplo de pseudo-elemento ::before */
.quote::before {
  content: '"';
  font-size: 24px;
  color: #ff9900;
}
```

### ::after (Depois)

```css
/* Exemplo de pseudo-elemento ::after */
.caption::after {
  content: ' - Autor Desconhecido';
  font-style: italic;
}
```

## Exemplo Interativo - Seletores Avançados

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .container p {
    color: #007bff;
  }

  .container > p {
    font-weight: bold;
  }

  .button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    text-align: center;
    cursor: pointer;
  }

  .button:hover {
    background-color: #00cc99;
  }

  .list li:nth-child(odd) {
    background-color: #f7f7f7;
  }

  .quote::before {
    content: '"';
    font-size: 24px;
    color: #ff9900;
  }

  .caption::after {
    content: ' - Autor Desconhecido';
    font-style: italic;
  }
</style>
</head>
<body>

<div class="container">
  <p>Texto de Exemplo</p>
</div>

<button class="button">Hover Me</button>

<ul class="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<p class="quote">Esta é uma citação.</p>
<p class="caption">Uma legenda qualquer.</p>

</body>
</html>
```

Neste exemplo, você verá como aplicar seletores de combinação, pseudo-classes e pseudo-elementos para estilizar elementos de maneira avançada.

---

Sinta-se à vontade para copiar e colar esses exemplos em um arquivo HTML para ver os resultados por conta própria. O Markdown acima serve como um guia introdutório para entender e aplicar seletores avançados em CSS.
