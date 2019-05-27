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
function printProfession (person) {
    console.log(`${person.name} is: `);
    
    if(person.programmer){
    console.log('programmer');  
    }
    if(person.soccerPlayer){
        console.log('Soccer player');  
        }
    if(person.marketer){
        console.log('marketer');  
        }
    if(person.engineer){
        console.log('engineer');  
        }
    if(person.photographer){
        console.log('photographer');  
        }
    if(person.nurse){
        console.log('nurse');  
        }
}
printProfession(tita);

function printOldAge (person){
    if (person.age>=18){
        console.log (`${person.name} is old`);
    } else{
        console.log (`${person.name} is young`);
}
}
printOldAge(tita);