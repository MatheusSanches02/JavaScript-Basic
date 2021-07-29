/*let expression = 'a';

switch(expression)
{
    case 'a': 
        //codigo para a expressao a
        console.log('a')
        break
    case 'b':
        //codigo para a expressao b
        console.log('b')
        break
    default:
        //caso nao faça nenhum dos cases
        console.log('default')
        break
}
*/

function calculator(number1, operator, number2)
{
    let result;

    switch(operator)
    {
        case '+':
            result = number1 + number2;
            break
        case '-':
            result = number1 - number2;
            break
        case '*':
            result = number1 * number2;
            break
        case '/':
            result = number1 / number2;
            break
        default:
            console.log('Operador inexistente na aplicação!')
    }
    return result;
}

console.log(calculator(4, "+", 8))//12
