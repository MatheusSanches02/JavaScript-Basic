/* 
    Function() constructor

    *expressão new
    *criar um novo objeto
    *this keyword
*/

function Person(name)
{
    this.name = name;
    this,walk = function()
    {
        return this.name + " está anadando!"
    }
};

const matheus = new Person("Matheus");