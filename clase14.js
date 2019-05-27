const tita = {
    name: 'Tita',
    lastName: 'Navarro',
    age: 29,
    city:'Guadalajara',
    weight: 85
}

console.log(`At the begin of the year ${tita.name} weights ${tita.weight}kg`);
const LIW = 0.5;
let days = 0;
const loseWeight = 15;
const goal = tita.weight - loseWeight;
console.log(goal);
const incrementWeigth = (person) => person.weight += LIW; 
const decrementWeigth = (person) => person.weight -= LIW;
const eatALot = ()=> Math.random() < 0.30;
const doExercise = ()=> Math.random() < 0.40;
while(tita.weight > goal){
    if(eatALot()){
        
        incrementWeigth(tita);
    }if(doExercise()){
        decrementWeigth(tita);
    }
    days +=1;
}

console.log(`Past ${days} days to ${tita.name} lose 15kg `);