let desconto = (valor,porcentagem) => valor - (porcentagem / 100 * valor);

let valor = Number(prompt("Nos diga o valor do produto: "));
let porcentagem = Number(prompt("Nos diga a porcentagem de desconto do produto: "));

alert(`${desconto(valor,porcentagem)}`)