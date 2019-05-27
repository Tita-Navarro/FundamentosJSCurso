/*Existen varias maneras de comparar variables u objetos dentro de javascript. En el primer ejemplo le asignamos a X 
un valor numérico y a Y un string. Para poder compararlos debemos agregar dos signos de igual (==). Esto los convierte 
al mismo tipo de valor y permite que se puedan comparar.

Cuando realizamos operaciones es recomendable usar tres símbolos de igual (===). Esto permite que JavasScript no iguale 
las variables que son de distinto tipo. Te recomendamos que uses el triple igual siempre que estés comparando variables.

Existen cinco tipos de datos que son primitivos:

1. Boolean
2. Null
3. Undefined
4. Number
5. String
*/

let x = 6, y = '6';
let compare = x == y;
let compare2 = x === y;
console.log(compare, compare2);

const tita = {
    name: 'Tita'
}

const anotherPerson = tita; /*{
    name: 'Tita'
}*/
 
/*compareName = tita.name == anotherPerson.name;
console.log(compareName);*/