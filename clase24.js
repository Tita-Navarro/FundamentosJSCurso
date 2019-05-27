/* La verdad oculta sobre las clases en Javascript.

Los objetos en JS son "contenedores" dinámicos de propiedades. Estos objetos poseen un enlace
a un objeto prototipo. Cuando intentamos acceder a la propiedad de un objeto, la propiedad no solo
se busca en el objeto sino tambien en el prototipo del objeto, en el prototipo del prototipo, y así
sucesivamente hasta que se encuentre una propiedad que coincida con el nombre o se alcance el final de la 
cadena de prototipos.

En lenguajes convencionales de Programación orientada a objetos como Java la herencia es "Copiar las propiedades
y métodos de un Objeto Padre a Objetos hijos."

Pero en lugar de hacer copias y copias de propiedades y métodos (funciones) JS tiene una solución más óptima
y es el Delegar estas propiedades y métodos.

La forma de Delegar es hacer Referencia (Apuntar) a esas Propiedades y Métodos al Objeto Padre en lo que llamaron
--La Cadena de Prototipos (Prototype Chain)--. */

//Herencia prototipal
function herencia(sonProtype, fatherPrototype){
    const fn = function (){}
    fn.prototype = fatherPrototype.prototype
    sonProtype.prototype = new fn;
    sonProtype.prototype.constructor = sonProtype
}

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

function Developer(name, lastName) {
    this.name= name;
    this.lastName = lastName;
}
herencia(Developer, person)

Developer.prototype.greetting = function(){
    console.log(`Hi, my name is ${this.name} ${this.lastName} and I am a developer`)
}



// let tita = new person('Tita', 'Navarro', 1.68);

// let andres = new person ('Andrés', 'Cabrera', 1.90) ;
    
// let martha = new person ('Martha', 'Aguirre', 1.60);
