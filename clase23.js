function person(name, lastName, height) {
    this.name = name;
    this.lastName= lastName;
    this.height= height;
}
person.prototype.greetting = function (){
    console.log(`Hi, my name is ${this.name} ${this.lastName}`)
}
// person.prototype.isTall = () =>{ Vamos a tener un error con this con el arrow (=>) function
//     return this.height > 1.80    Entonces para los prototipos debemos especificar que es una función
// }                                con el método mi nombre de funcion = function (){mi orden y lo que regresa}
// Dentro del arrow function (=>), this hace referencia al espacio global, a window.

/*Window es el objeto global dentro del navegador

Cuando 'this' no es lo que esperamos, este es el principal error en JS.

En las arrow functions, se asigna la función, pero cambia el this dentro de la función, ya que 
trata de tomar el this global(window), es decir, el que esta fuera de la arrow function. 

--Debugger-- 
Invoca cualquier funcionalidad de depuración disponible, tiene la misma función que un breakpoint.
Si la funcionalidad de depuración no está disponible, esta sentencia no tiene efecto alguno.*/

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