//break - para a execução no loop

for(let i = 0; i < 10; i++)
{
    console.log(i)
}

for(let a = 100; a > 0; a--)
{
    if(a === 50)
    {
        break;
    }
    console.log(a)
}

for(let b = 10; b > 0; b--)
{
    if(b === 5)
    {
        continue;
    }
    console.log(b)
}