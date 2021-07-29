/*
    Crie um algoritmo que transforme as notas do sistema 
    numerico para um sistemas de notas em caracteres tipo A B C

    * de 9 pra cima - A
    * entre 8 e 8.9 - B
    * entre 7 e 7.9 - C
    * entre 6 e 6.9 - D
    * menor que 6   - E

*/
function calculaMedia()
{
    let nota1 = parseFloat(prompt("Digite a primeira nota: "));
    if(nota1 < 0 || nota1 > 10)
    {
        alert("Nota invalida!")
        nota1 = parseFloat(prompt("Digite uma nota valida: "))
    }
    console.log(nota1);

    let nota2 = parseFloat(prompt("Digite a segunda nota: "));
    if(nota2 < 0 || nota2 > 10 )
    {
        alert("Nota inválida!")
        nota2 = parseFloat(prompt("Digite uma nota valida: "))
    }
    console.log(nota2);

    let media = (nota1 + nota2) / 2;
    console.log(`A média obtida foi ${media}!`)

    if(media >= 9)
    {
        console.log("Classificação A")
    }
    else if(media >= 8 && media < 9)
    {
        console.log("Classificação B")
    }
    else if(media >= 7 && media < 8)
    {
        console.log("Classificação C")
    }
    else if(media >= 6 && media < 7)
    {
        console.log("Classificação D")
    }
    else if(media >=0 && media < 6)
    {
        console.log("Classificação E")
    }
    
}

calculaMedia();