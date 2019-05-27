function person(name, lastName, height) {
    this.name = name;
    this.lastName= lastName;
    this.height= height;
}
person.prototype.greetting = function (){
    console.log(`Hi, my name is ${this.name} ${this.lastName}`)
}
// person.prototype.isTall = function (){
//     return this.height > 1.80
// }
person.prototype.isTall = function (){
    this.height>=1.8 ? console.log(`${this.name} is tall`) : console.log(`${this.name} is short`)
}

let tita = new person('Tita', 'Navarro', 1.68)
tita.greetting()
tita.isTall()

let andres = new person ('Andrés', 'Cabrera', 1.90)
andres.greetting() 
andres.isTall()

let martha = new person ('Martha', 'Aguirre', 1.60)
martha.greetting()
martha.isTall()