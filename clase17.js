const tita ={
    name: 'Tita',
    lastName: 'Navarro',
    height : 1.68
}

const andres ={
    name: 'Andrés',
    lastName: 'Cabrera',
    height : 1.78
}

const pepe ={
    name: 'Pepe',
    lastName: 'Navarro',
    height : 1.80
}

const ricky ={
    name: 'Ricky',
    lastName: 'Navarro',
    height : 1.84
}

const patty ={
    name: 'Patty',
    lastName: 'Lara',
    height : 1.68
}

const martha ={
    name: 'Martha',
    lastName: 'Aguirre',
    height : 1.60
}

const itzia ={
    name: 'Itzia',
    lastName: 'Aguirre',
    height : 1.62
}

const friends = [tita, andres, pepe, ricky, patty, martha, itzia];

for(let i=0; i<friends.length; i++){
    let friend =friends[i]
console.log(`${friend.name} heigth is ${friend.height} mts`);
}

/*friends.forEach(friend => {
    console.log(`${frien.name} height is ${friend.height}`)
});*/