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
/*const isOld = function (person){
     return person.age >=oldAge;
}*/
const isOld = ({ age }) => age>=oldAge;

const printOldAge= (person)=> {
    if (isOld(person)){
        console.log (`${person.name} is old`);
    } else{
        console.log (`${person.name} is young`);
}
}
printOldAge(tita);
printOldAge(ricardo);

const canAccess =(person) =>{
    if(!isOld(person)){
        console.log('Access denied');
    }else{
        console.log('You can pass');
    }
}
canAccess(tita);
canAccess(ricardo);
/*const permitirAcceso = ({ edad }) => !esMayorDeEdad({ edad }) ? 
console.log('Acceso denegado') : console.log('Adelante')*/