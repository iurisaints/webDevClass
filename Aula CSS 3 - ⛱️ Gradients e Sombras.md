# Gradients e Sombras em CSS

Neste guia, vamos explorar como adicionar gradientes e sombras aos elementos em CSS para criar efeitos visuais interessantes.

## Gradientes CSS

Os gradientes permitem criar transições suaves de cor em elementos.

### Gradient Linear

```css
/* Exemplo de gradiente linear */
.linear-gradient {
  background: linear-gradient(to right, #007bff, #00cc99);
}
```

### Gradient Radial

```css
/* Exemplo de gradiente radial */
.radial-gradient {
  background: radial-gradient(circle, #ff9900, #ffcc00);
}
```

## Exemplo Interativo - Gradients

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .linear-gradient {
    width: 200px;
    height: 100px;
    background: linear-gradient(to right, #007bff, #00cc99);
  }
  
  .radial-gradient {
    width: 200px;
    height: 100px;
    background: radial-gradient(circle, #ff9900, #ffcc00);
  }
</style>
</head>
<body>

<div class="linear-gradient"></div>
<div class="radial-gradient"></div>

</body>
</html>
```

Neste exemplo, você verá caixas com gradientes lineares e radiais aplicados como plano de fundo.

## Sombras CSS

As sombras podem adicionar profundidade e dimensão aos elementos.

### Sombra de Caixa

```css
/* Exemplo de sombra de caixa */
.box-shadow {
  width: 100px;
  height: 100px;
  background-color: #007bff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
}
```

### Sombra de Texto

```css
/* Exemplo de sombra de texto */
.text-shadow {
  font-size: 24px;
  color: #007bff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
```

## Exemplo Interativo - Sombras

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .box-shadow {
    width: 100px;
    height: 100px;
    background-color: #007bff;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  }
  
  .text-shadow {
    font-size: 24px;
    color: #007bff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
</style>
</head>
<body>

<div class="box-shadow"></div>
<p class="text-shadow">Sombra de Texto</p>

</body>
</html>
```

Neste exemplo, você verá uma caixa com sombra de caixa e um texto com sombra de texto aplicados.

---

Sinta-se à vontade para copiar e colar esses exemplos em um arquivo HTML para ver os resultados por conta própria. O Markdown acima serve como um guia introdutório para entender e aplicar gradientes e sombras em elementos com CSS.
