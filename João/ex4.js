let disponivel = (quant) => quant <= 50;

let quant = Number(prompt("Nos diga a quantidade de estrogênio desejada: "));

if(disponivel(quant)){
    alert(`Temos estrogênio o suficiente!`)
}else{
    alert(`Não temos estrogênio o suficiente.`)
}