/* En JS, los parámetros de funciones por defecto son undefined. De todos modos, en algunas situaciones
puede ser útil colocar un valor por defecto diferente que lo evalúe como verdadero. */

class person {
    constructor(name, lastName, height){
        this.name= name;
        this.lastName = lastName;
        this.height = height; 
    }
    greetting(fn){
        console.log(`Hi, my name is ${this.name} ${this.lastName}`) 
        if(fn){
            fn(this.name, this.lastName, false);
        }
    }
    isTall(){
        this.height>=1.8 ? console.log(`${this.name} is tall`) : console.log(`${this.name} is short`)
    }

    }
    class Developer extends person{
        constructor(name, lastName, height){
            super(name, lastName, height);
        }
        greetting(fn){
            console.log(`Hi, my name is ${this.name} ${this.lastName} and I am a developer`);
            if(fn){
                fn(this.name, this.lastName, true);
            }
        }
    }
    function answerGreetting (name, lastName, isDev) {
        console.log(`Buen día ${name} ${lastName}`);
        if (isDev){
            console.log(`I don't know that you are developer`)
        }
    }
    let tita = new Developer('Tita', 'Navarro', 1.68);
    tita.greetting(answerGreetting);
    let andres = new person ('Andrés', 'Cabrera', 1.90) ;
    andres.greetting(answerGreetting);
    let martha = new person ('Martha', 'Aguirre', 1.60);
    martha.greetting(answerGreetting);