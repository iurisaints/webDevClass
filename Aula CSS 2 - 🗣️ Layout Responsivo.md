# Layout Responsivo em CSS

Neste guia, vamos explorar o conceito de layout responsivo em CSS, que permite que os elementos se ajustem automaticamente a diferentes tamanhos de tela.

## Design Responsivo

O design responsivo garante que seu site ou aplicativo se adapte a dispositivos de diferentes tamanhos, como smartphones, tablets e desktops. Isso melhora a experiência do usuário e a acessibilidade.

### Media Queries

As media queries permitem aplicar estilos específicos com base nas características do dispositivo, como largura da tela. Isso permite reorganizar ou ajustar elementos conforme necessário.

```css
/* Exemplo de media query */
@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
```

## Exemplo Interativo - Layout Responsivo

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  
  .box {
    width: 30%;
    padding: 10px;
    margin: 10px;
    background-color: #007bff;
    color: white;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    .box {
      width: 45%;
    }
  }

  @media screen and (max-width: 480px) {
    .box {
      width: 100%;
    }
  }
</style>
</head>
<body>

<div class="container">
  <div class="box">Item 1</div>
  <div class="box">Item 2</div>
  <div class="box">Item 3</div>
  <div class="box">Item 4</div>
  <div class="box">Item 5</div>
  <div class="box">Item 6</div>
</div>

</body>
</html>
```

Neste exemplo, usamos media queries para ajustar o layout das caixas (`box`) conforme a largura da tela diminui. Isso cria uma experiência de usuário agradável em diferentes dispositivos.

---

Sinta-se à vontade para experimentar os exemplos acima, copiando e colando o código em um arquivo HTML. O Markdown acima serve como um guia introdutório para entender e implementar o layout responsivo em CSS.
