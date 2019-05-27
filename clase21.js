/*Las clases son funciones cuya sintaxis tiene 2 componentes:

- Expresiones
-Declaraciones

Hablar de objetos en Javascript es hablar de prototipos
'this' hace referencia al nuevo objeto que se acaba de crear
La función que define al prototipo retorna implícitamente this, es decir retorna el nuevo objeto que se creó
La palabra reservada 'new' se utiliza para crear un nuevo objeto con el prototipo indicado. */

function person(name, lastName, height) {
    this.name = name;
    this.lastName= lastName;
    this.height= height;
}
person.prototype.greetting = function (){
    console.log(`Hi, my name is ${this.name} ${this.lastName}`)
}

person.prototype.isTall = function (){
    this.height>=1.8 ? console.log(`${this.name} is tall`) : console.log(`${this.name} is short`)
}

let tita = new person('Tita', 'Navarro', 1.68)
tita.greetting()
tita.isTall()

let andres = new person ('Andrés', 'Cabrera', 1.80)
andres.greetting() 
andres.isTall()

let martha = new person ('Martha', 'Aguirre', 1.60)
martha.greetting()
martha.isTall()