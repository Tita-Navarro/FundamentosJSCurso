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
const isTall = ({height}) => height > 1.7;
const isShort = ({height}) => !isTall({height})
//const isTall=friend=>friend.height > 1.7
 //return friend.height > 1.7;
const friends = [tita, andres, pepe, ricky, patty, martha, itzia];

const tallFriends = friends.filter(isTall);
const shortFriends = friends.filter(isShort);
console.log(tallFriends);
console.log(shortFriends);

/*const passHeightInCms =friend=>{
 /*friend.height = friend.height * 100;
 return friend;
 return{
     ...friend,
    height: friend.height *100
 }
}*/
const passHeightInCms= friend =>({
    ...friend,
    height: friend.height*100,
})
const personsCms= friends.map(passHeightInCms);
console.log(personsCms);