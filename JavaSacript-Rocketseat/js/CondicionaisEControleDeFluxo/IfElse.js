/*if(true)
{
    //bloco de codigo
}
else
{
    //bloco de codigo
}
*/

/*
let temperature = 36.5;

if(temperature >= 37.5)
{
    console.log('Você esta com febre alta');
}
else if(temperature < 37.5 && temperature >= 37)
{
    console.log('Febre moderada');
}
else
{
    console.log('Temperatura normal!');
}
*/
let temperature = 36.5;
let highTemperature = temperature >= 37.5;
let mediumTemperature = temperature < 37.5 && temperature >= 37;

if(highTemperature)
{
    console.log('Você esta com febre alta');
}
else if(mediumTemperature)
{
    console.log('Febre moderada');
}
else
{
    console.log('Temperatura normal!');
}
