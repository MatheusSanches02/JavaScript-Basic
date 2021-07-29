/* 
    Prototype

    *prototype-based language
    *prototype chain
    *__proto__
    *acessar prototipos através de um ponto(.)

*/

/* 
    Type conversion (typecasting) vs Type coersion

    *Alteração de tipo de dado

    console.log(Number('9') + 5) //14


*/ 

/* 
    Manipulando stings e numeros

    Trasformar Sting em numero e numero em String

    let string = "123"
    console.log(Number(string))
    let number = 321
    console.log(String(number))

    Contar quantos caracteres tem uma palavra e quantos digitos tem um numero

    let word = "Paralelepipedo"
    console.log(word.length) //14
    let number = 1234
    console.log(String(number).length) //4

    Transformar um numero quebrado com 2 casas decimais e trocar ponto por virgula

    let number = 332.333554116
    console.log(number.toFixed(2).replace(".", ","))
    //332,33

    Transformar letras minusculas em maiusculas. Fça o contrario disso tambem

    let word = "Programar é muito bacana!"
    console.log(word.toUpperCase)// tudo maiusculo
    console.log(word.toLowerCase)// tudo minusculo

    Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array.
    Depois disso, transforme o array em texto e onde eram espaços, coloque _

    let phrase = "Eu quero viver o amor!"
    let myArray = phrase.split(" ") // jogar tudo separado num array
    let phraseWithUnderscore = myArray.join("_") // separa as palavras por _

    Verificar se o texto tem a palvra amor

    let phrase = "Eu quero viver o Amor!"
    console.log(phrase.includes("Amor")) //true

    


*/

/*
    Manipulando Arrays
    
    Criar array com construtor

    let myArray = new Array('a', 'b', 'c') 

    Contar elementos de um array

    console.log(["a","b","c"].length)

    Transfromar uma cadeia de caracteres em elementos de um array

    let word = "manipulção"
    console.log(Array.from(word))

*/

// Manipulando Arrays

let techs = ["html", "css", "js"]

//adicionar um item no fim -> techs.push("nodejs")

//adicionar no começo -> techs.unshift("sql") 

//remover do fim -> techs.pop()

//remover do começo -> techs.shift()

//pegar somente alguns elementos -> techs.slice(1, 2) *de onde ate onde //css no console.log

//remover um ou mais itens em qualquer posição -> techs.splice(1, 2) *a partir de qual tirar quantos //tirou css e js

//encontrar a posição de um elemento no array -> techs.indexOf('css') 