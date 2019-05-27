const tita = {
    name: 'Tita',
    lastName: 'Navarro',
    age: 29,
    city:'Guadalajara',
    weight: 70
}

console.log(`At the begin of the year ${tita.name} weights ${tita.weight}kg`);
const LIW = 0.2;
const daysOfTheYear = 365;
const incrementWeigth = (person) => person.weight += LIW; 
const decrementWeigth = (person) => person.weight -= LIW;
for(let i=1; i<= daysOfTheYear; i++){
    let random = Math.random();
if (random <0.25){
    incrementWeigth(tita);

}else if (random <0.5){
    decrementWeigth(tita);
}
}
console.log(`At the end of the year ${tita.name} weights ${tita.weight.toFixed(2)}kg `);