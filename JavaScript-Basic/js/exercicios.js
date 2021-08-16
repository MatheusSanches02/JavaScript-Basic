const ex01 = document.querySelector(".ex01");
ex01.addEventListener("click", () => {
    let nota1, nota2, nota3;
    nota1 = prompt("Digite a primeira nota: ");
    nota2 = prompt("Digite a segunda nota: ");
    nota3 = prompt("Digite a terceira nota: ");
    
    const media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
    alert("Veja o resultado final no console!")
    console.log(`Média: ${media}`);
});

const ex02 = document.querySelector(".ex02");
ex02.addEventListener("click", () => {
    let altura, peso;

    altura = parseFloat(prompt("Digite sua altura(m): "));
    peso = parseInt(prompt("Digite seu peso(Kg): "));

    const imc = Math.round(peso / (altura**2));
    alert(imc)
    alert("Resultado no console!");

    if (imc < 18.5) {
        console.log("Abaixo do peso...");
    } else if (imc >= 18.5 && imc < 24.9) {
        console.log("Peso normal");
    } else if (imc >= 24.9 && imc < 29.9) {
        console.log("Sobrepeso...")
    } else if (imc >= 29.9 && imc < 34.9) {
        console.log("Obesidade grau I");
    } else if (imc >= 34.9 && imc < 39.9) {
        console.log("Obesidade grau II");
    } else {
        console.log("Obesidade grau III ou mórbida");
    }
    
});

const ex03 = document.querySelector(".ex03");
ex03.addEventListener("click", () => {
    let num;
    let maior = 0;
    let maiorIndex;
    const listaNums = [];

    for (let i = 0; i < 3; i++) {
        num = parseInt(prompt(`Digite o ${i + 1}º número: `));
        listaNums.push(num);
    }

    listaNums.forEach(e => {
        if (e > maior) {
            maior = e;
            maiorIndex = listaNums.indexOf(e);
        }
    });

    alert(`O maior número digitado: ${maior}`);
    
    console.log(`Maior número digitado foi o ${maiorIndex + 1}º`);

});

const ex04 = document.querySelector(".ex04");
ex04.addEventListener("click", () => {
    let idade = parseInt(prompt("Digite sua idade: "));

    alert("Resultado no console!");

    if (idade >= 18) {
        console.log("Você é maior de idade");
    } else {
        console.log("Você é menor de idade");
    }
});

const ex05 = document.querySelector(".ex05");
ex05.addEventListener("click", () => {
    let total = 0;

    for(let i = 0; i < 1000; i++)
    {
        if(i % 5 == 0 || i % 3 == 0){
            total += i
        }
        console.log(i)
    }
    console.log(total)
});

const ex06 = document.querySelector(".ex06");
ex06.addEventListener("click", () => {
    let term1 = 1;
    let term2 = 2;
    let sum = 0;

    while(term2 < 50000){
        let newTerm = term1 + term2;
        sum += newTerm;
        term1 = term2;
        term2 = newTerm;
        console.log(newTerm)
    }
    
    console.log(sum)
});

/**
 * IF TERNARIO
 * 
 *  let idade = parseInt(prompt("Informe sua idade: "));
 * let resultado = idade >= 18 ? "Maior de idade": "Menor de idade";
 * console.log(resultado);
 */
// exercicio finalizado por Matheus Sanches