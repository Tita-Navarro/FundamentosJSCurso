/*Otra estructura repetitiva es el do-while. A diferencia de la instrucción while, un bucle do…while se ejecuta 
una vez antes de que se evalúe la expresión condicional.*/

let count = 0;

const rain = () => Math.random()< 0.25;

do{
count++;
}while(!rain());
const frequency = count === 1 ? 'time' : 'times';
console.log(`I went to see if it rains and it rains ${count} ${frequency}`);