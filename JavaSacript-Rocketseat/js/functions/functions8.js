// callback function

function sayMyName(name)
{
    console.log('Antes da callback')
    name()
    console.log('Depois da callback')
}

sayMyName
(
    () => {
        console.log('estou em uma callback')
    }
);