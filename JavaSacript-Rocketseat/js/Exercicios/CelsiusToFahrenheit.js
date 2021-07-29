/*
    Crie uma função que receba uma string em celsius ou fahrenheit
    e faça a transformação de uma unidade para outra.

    C = (F - 32) * 5/9

    F = C * 9/5 + 32

*/

function celsiusToFahrenheit(value)
{
    return (value * 9 / 5) + 32
}

function fahrenheitToCelsius(value)
{
    return (value - 32) * 5/9
}

function option()
{
    let selectOption = prompt("Digite 1 para converter de celsius pra fahrenheit, digite 2 para  o inverso: ")

    if(selectOption == 1)
    {
        let num1 = prompt("Digite quantos graus celsius você deseja converter: "); 
        console.log(celsiusToFahrenheit(num1));
    }
    else if(selectOption == 2)
    {
        let num2 = prompt("Digite quantos graus fahrenheit você deseja converter: ");
        console.log(fahrenheitToCelsius(num2));
    }
}

option();