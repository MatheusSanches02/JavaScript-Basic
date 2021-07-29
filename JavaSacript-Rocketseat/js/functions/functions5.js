//function scope

let subject = 'create video';

function createThink(subject) // se nao passar nada como parametro, vai modificar o "create video"
{
    subject = 'study';
    return subject;
}

console.log(subject); //create video
console.log(createThink(subject)); //study