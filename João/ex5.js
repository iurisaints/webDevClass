let mediap = (n1,p1,n2,p2,n3,p3) => (n1*p1+n2*p2+n3*p3)/(p1+p2+p3);

let nota1 = Number(prompt("Nos diga a nota da primeira prova: "));
let peso1 = Number(prompt("Nos diga o peso da primeira prova: "));
let nota2 = Number(prompt("Nos diga a nota da segunda prova: "));
let peso2 = Number(prompt("Nos diga o peso da segunda prova: "));
let nota3 = Number(prompt("Nos diga a nota da terceira prova: "));
let peso3 = Number(prompt("Nos diga o peso da terceira prova: "));

alert(`Sua média ponderada será ${mediap(nota1,peso1,nota2,peso2,nota3,peso3)}`);