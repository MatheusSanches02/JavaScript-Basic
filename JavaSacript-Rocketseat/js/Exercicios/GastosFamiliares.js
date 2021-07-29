/*
    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
        *entradas: []
        *saidas:   []

    Agora, crie uma função  que irá calcular o total de receitas e despesas e irá 
    mostrar uma mensagem se a familia está com saldo positivo ou negativo
    seguido do valor do saldo. 

*/

let familia = 
{
    entradas : [1000.00, 500.00, 15.50, 17.80, 3500.00 ],
    saidas : [2000.00, 100.00, 900.00, 1000.00]
};

function sum(array)
{
    let total = 0;

    for(let valor of array)
    {
        total += valor
    };

    return total;
};

function totalRenda()
{
    const calculaEntradas = sum(familia.entradas);
    const calculaSaidas = sum(familia.saidas);    

    let rendaTotal = calculaEntradas - calculaSaidas;

    if(rendaTotal > 0)
    {
        console.log(`Saldo positivo com R$${rendaTotal} de saldo final!`)
    }
    else if(rendaTotal < 0)
    {
        console.log(`Saldo negativo com R$${rendaTotal} de saldo final`)
    }
    else
    {
        console.log("Seu saldo foi de R$0,00")
    }
};

totalRenda();