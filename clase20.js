const tita ={
    name: 'Tita',
    lastName: 'Navarro',
    height : 1.68,
    bookQuantity: 75
}

const andres ={
    name: 'Andrés',
    lastName: 'Cabrera',
    height : 1.78,
    bookQuantity: 50
}

const pepe ={
    name: 'Pepe',
    lastName: 'Navarro',
    height : 1.80,
    bookQuantity: 95
}

const ricky ={
    name: 'Ricky',
    lastName: 'Navarro',
    height : 1.84,
    bookQuantity: 35
}

const patty ={
    name: 'Patty',
    lastName: 'Lara',
    height : 1.68,
    bookQuantity: 45
}

const martha ={
    name: 'Martha',
    lastName: 'Aguirre',
    height : 1.60,
    bookQuantity: 80
}

const itzia ={
    name: 'Itzia',
    lastName: 'Aguirre',
    height : 1.62,
    bookQuantity: 90
}

const friends = [tita, andres, pepe, ricky, patty, martha, itzia];

/*let acum = 0;

for (let i = 0; i <friends.length; i++ ){
    acum = acum + friends[i].bookQuantity
}
console.log(`En total todos tienen ${acum} libros`);*/

/*const reducer =(acum, friend)=>{
    return acum+friend.bookQuantity;
} (Primera solución de función)*/
const reducer =(acum, { bookQuantity})=> acum + bookQuantity;
let totalBooks = friends.reduce(reducer, 0)

console.log(`En total todos tienen ${totalBooks} libros`)