<h1> Aula 2 - Mais TAGs e Explicações </h1>

# HTML5 - árvore do documento

Todo documento HTML é representado por uma estrutura de árvore.
Uma árvore é formada por **nodos**. Cada nodo representa um elemento do documento HTML.

Este é o código HTML da árvore.

``` html
<html>

    <head>
        <title></title>
    </head>

    <body>
        <p></p>
        <p>
            <strong></strong>
            <em></em>
        </p>
    </body>

</html>
```


Cada tag **marca** um trecho do conteúdo do documento. O conteúdo é escrito *entre as tags* e esse conteúdo também é um nodo/elemento da árvore.

> Note que existe uma **tag de abertura** e outra **tag de fechamento** (iniciada por /) e que o conteúdo é escrito entre elas.

O documento acima, agora com conteúdo textual, poderia ficar assim:


``` html
<html>

    <head>
        <title>Título do documento/página</title>
    </head>

    <body>
        <p>Um parágrafo de texto, texto, texto...</p>
        <p>
            Outro parágrafo de texto, texto...
            <strong>com negrito</strong> e também
            <em>um texto em itálico</em>.
        </p>
    </body>

</html>
```

O resultado é:

><html>
>
>    <head>
>        <title>Título do documento/página</title>
>    </head>
>
>    <body>
>        <p>Um parágrafo de texto, texto, texto...</p>
>        <p>
>            Outro parágrafo de texto, texto...
>            <strong>com negrito</strong> e também
>            <em>um texto em itálico</em>.
>        </p>
>    </body>
>
></html>

## Estrutura e conteúdo do documento

Precisamos diferenciar o que é parte da estrutura e o que é parte do conteúdo do documento.

As tags são usadas com o objetivo de estruturar o documento e têm muito pouco efeito visual sobre o que aparece na página que o browser exibe.

### Estrutura

A tag <code>html</code> é a raíz do documento.
- Todo o documento é escrito entre as tags <code> \<html\> </code> e <code>\<\\html\></code>
- Tudo que vai entre essas tags fica **abaixo** da tag <code>html</code> na árvore do documento. 
- Falamos tanto **estar abaixo de** como **estar dentro de** uma tag, dependendo se nos referimos à árvore ou ao código HTML, respectivamente.
- Outra nomenclatura usada é 
- as duas partes principais de um documento HTML são os elementos <code>head</code> e <code>body</code>.

#### \<head\>
Dentro de <\head\> escrevemos configurações, metadados e outras tags que afetam o documento como um todo.

#### \<body\>
É o corpo do documento. Dentro da tag \<body\> escrevemos o conteúdo do documento e o código HTML que o estrutura.

### Conteúdo

O corpo do documento, onde está o conteúdo, é escrito dentro da tag <code>\<body\></code>.

O corpo de um documento costuma ter um cabeçalho, uma parte principal e um rodapé, e o HTML5 tem tags para essas partes. São elas:

- \<header\>
- \<main\>
- \<footer\>

Exemplo:

``` html
<body>
        
        <header>
            <h1>Nome do meu documento</h1>
            <a href="texto1.html">Voltar</a>
        </header>

        <main>
            <h2>Título da parte I</h2>
            <p>
                Texto principal do documento
            </p>
            <p>
                <img width="80" src="homemaranha.png" />
            <p>
                <a href="https://codeberg.org/grz/front23n">Repositório do curso</a>
            </p>
        </main>

        <footer>
            <p>Rodapé</p>
        </footer>

    </body>
```

As outras tags usadas no exemplo são:

- \<a\> - para criar um link
- \<img\> - para criar uma imagem

Essas tags são diferentes das que vimos até agora. Elas contém **atributos**, que são informações que precisamos dar para que o browser interprete corretamente a tag.

![atributo da tag](img/grumpy-cat-attribute-small.png)
Exemplo de *atributo de uma tag*.

Alguns atributos serão obrigatórios mas muitos serão opcionais.

# Links, URLs e a WEB

O link é o elemento estrutural responsável pelo 'HT' do HTML. **H**iper **T**exto.

Páginas HTML são docuentos de Hiper Texto por conterem hiperreferências a outros documentos, formando uma **teia de recursos** acessíveis na rede - a WEB.

A propriedade **href** significa *hiperreferência*. Ela guarda o caminho para um outro documento (que pode ser outro html, uma imagem, um video... qualquer 'recurso' disponível na INTERNET).

O caminho para esse *recurso* é escrito na forma de um **URL** - *Uniform Resource Locator* - Localizador Uniforme de Recurso.

A forma do URL é:

```
protocolo://endereço.do.servidor:porta/caminho/do/recurso

Exemplo:
http://codeberg.org/grz/front23n
```

- https - protocolo
- codeberg.org - endereço do servidor (web)
- porta - a porta padrão do http é a 80. Não precisamos escrever o número da porta quando usamos a padrão
- /grz/front23n - é o caminho para chegar ao *recurso* partindo da *raíz* do servidor

O link para esse recurso é criado assim em HTML

``` html
<a href="https://codeberg.org/grz/front23n">Repositório do curso</a>
```

O texto entre as tags \<a\> é o rótulo que vai aparecer no documento, que por padrão é apresentado como um texto sublinhado.

Assim

<a href="https://codeberg.org/grz/front23n">Repositório do curso</a>

### Imagens

Existem browsers que acessam sites em modo texto mas WEB é essencialmente gráfica.

A tag \<img\> tem um atributo **src** (source - fonte) que recebe o caminho para a imagem que vai ser incluída na página.

Exemplo

``` html
<img src='arquivo-de-imagem.png' />
```

Note como a tag é fechada. Usamos uma barra antes do sinal de '>'. Isso é feito quando a tag não tem conteúdo, quando nada vai escrito entre a tag de abertura e a de fechamento, como é o caso de \<img\>.

Opcionalmente, podemos incluir as propriedade **width** e **height** para dizer qual o tamanho e a altura, respectivamente, da imagem

Exemplo:

``` html
<img src='image.png' width='200px' height = '300px'>
```

- px - unidade de medida - pixels

# Mais tags HTML

## Listas 

Listas podem ser do tipo **ordenadas** ou **não ordenadas**. 

- \<ol\> - Lista ordenada
- \<ul\> - Lista não ordenada

Cada ítem de uma lista é escrito entre um par de tags \<li\> - List Item.

Exemplo - Lista ordenada

``` html
<ol>
    <li> ítem 1</li>
    <li> ítem 2</li>
    <li> ítem 3</li>
</ol>
```
Resultado:

1. ítem 1
1. ítem 2
1. ítem 3

Exemplo - Lista não ordenada

```html
<ul>
    <li> ítem 1</li>
    <li> ítem 2</li>
    <li> ítem 3</li>
</ul>
```

Resultado:

- ítem 1
- ítem 2
- ítem 3

## Texto preformatado

Texto preformatado é um bloco de texto puro, cujos espaços em branco são respeitados pelo browser na hora da exibição, que por padrão é feita usando fonte monoespaçada, garantindo a formatação original do texto.

É muito usado para exibir blocos de código, como vem sendo usado nestas páginas.

Exemplo:
``` html
<pre>
    <ul>
        <li> ítem 1</li>
        <li> ítem 2</li>
        <li> ítem 3</li>
    </ul>
</pre>
```

Resultado:
```
<ul>
    <li> ítem 1</li>
    <li> ítem 2</li>
    <li> ítem 3</li>
</ul>
```

## Tabelas

``` html
<html>
<head>
   <title>Document</title>
</head>
<body>
    <table>
        <tr>
            <td>celula 01-a</td>
            <td>celula 01-b</td>
            <td>celula 01-c</td>
        </tr>
        <tr>
            <td>celula 02-a</td>
            <td>celula 02-b</td>
            <td>celula 02-c</td>
        </tr>
        <tr>
            <td>celula 03-a</td>
            <td>celula 03-b</td>
            <td>celula 03-c</td>
        </tr>
    </table>
</body>
</html>
```

Resultado: 

<body>
    <table>
        <tr>
            <td>celula 01-a</td>
            <td>celula 01-b</td>
            <td>celula 01-c</td>
        </tr>
        <tr>
            <td>celula 02-a</td>
            <td>celula 02-b</td>
            <td>celula 02-c</td>
        </tr>
        <tr>
            <td>celula 03-a</td>
            <td>celula 03-b</td>
            <td>celula 03-c</td>
        </tr>
    </table>
</body>
