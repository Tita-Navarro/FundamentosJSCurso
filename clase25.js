class person {
    constructor(name, lastName, height){
        this.name= name;
        this.lastName = lastName;
        this.height = height; 
    }
    greetting(){
        console.log(`Hi, my name is ${this.name} ${this.lastName}`) 
    }
    isTall(){
        this.height>=1.8 ? console.log(`${this.name} is tall`) : console.log(`${this.name} is short`)
    }

    }

// function person(name, lastName, height) {
//     this.name = name;
//     this.lastName= lastName;
//     this.height= height;
// }

// person.prototype.greetting = function (){
//     console.log(`Hi, my name is ${this.name} ${this.lastName}`)
// }

// person.prototype.isTall = function (){
//     this.height>=1.8 ? console.log(`${this.name} is tall`) : console.log(`${this.name} is short`)
// }

class Developer extends person{
    constructor(name, lastName, height){
        super(name, lastName, height);
    }
    greetting(){
        console.log(`Hi, my name is ${this.name} ${this.lastName} and I am a developer`);
    }
}

// function Developer(name, lastName) {
//     this.name= name;
//     this.lastName = lastName;
// }
// Developer.prototype.greetting = function(){
//     console.log(`Hi, my name is ${this.name} ${this.lastName} and I am a developer`)
// }