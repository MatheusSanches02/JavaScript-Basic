function sayMyName(name)
{
    if(name === '')
    {
        throw new Error("Nome é obrigatório!") // se o nome nao for preenchido vai aparecer esse erro
    }

    console.log("Depois do erro") // se o nome for preenchido vai imprimir essa linha 
}

try
{
    sayMyName()
}
catch(e)
{
    console.log(e)
}