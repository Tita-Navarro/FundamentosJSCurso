const tita = {
    name: 'Tita',
    lastName: 'Navarro',
    age: 29,
    city:'Guadalajara',
    programmer: true,
    soccerPlayer: true,
    marketer: true,
    engineer: false,
    photographer: false,
    nurse:false
}
const ricardo = {
    name: 'Ricardo',
    lastName:'Milos',
    age: 15
}
const oldAge= 18;
function isOld(person){
   return person.age >=oldAge;
}
function printOldAge (person){
    if (isOld(person)){
        console.log (`${person.name} is old`);
    } else{
        console.log (`${person.name} is young`);
}
}
printOldAge(tita);
printOldAge(ricardo);