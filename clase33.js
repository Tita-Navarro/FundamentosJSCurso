/* Las promesas sirven para ejecutar nuestro código asíncrono.
"Una promesa es un objeto que representa la terminación o el fracaso eventual de una operación asíncrona",
dicho de forma más cotidiana, se va a mandar una función para ver si falla o se ejecuta con éxito. 

Al crear una promesa debemos pasarle por argumento la función que vamos a ejecutar de forma asíncrona, dicha
función va a recibir dos parámetros para evaluar si se ejecuto bien la función o si falló.

Nuestra promesa va a tener dos métodos para saber si todo salió bien o fallo. El método 'then' se encarga cuando
la función se ejecutó exitosamente, mientras que el método 'catch' se encarga cuando la promesa falla.

Dentro de JavaScript tenemos dos funciones para ejecutar una función después de algún tiempo, estas funciones son:
- setIterval: ejecutara una función cada cierto tiempo (x uno se lo da).
- setTimeout: ejecutara una función después de cierto tiempo (x también uno se lo da).

Si queremos resolver varias promesas a la misma vez, Promise cuenta con un método llamado 'all' que recibe
un array de promesas como parámetro. Este método se termina cuando todas las promesas del array se terminan
de ejecutar. Si una de las promesas falla entonces el método 'all' saltará a un error mandándote al método catch.

Promise también cuenta 'race' que te regresa los resultados de la promesa que termine primero */

console.log('hola mundo!');
const noCambia = "Tita";

let cambia = "@tita_navarro";

function cambiarNombre(nuevoNombre) {
    cambia = nuevoNombre;
}

const newUser = new Promise(function(good, bad){
    //llamar a un api
    setTimeout(function() {
        good('se acabo el tiempo 3');
        //good();
    },3000)
})

const getNewUser = new Promise(function(good, bad){
    //llamar a un api
    setTimeout(function() {
        good('se acabo el tiempo');
        //good();
    },5000)
})
//Promise.all - Para ejecutar todas las promesas
//Promise.race - para ejecutar la que se realice en menor tiempo.
// newUser
//     .then(function(){
//         console.log('Todo se encuentra bien');
//     })
//     .catch(function(message) {
//         console.log(message);
//     })

    Promise.race([
        newUser,
        getNewUser,
    ])
    .then(function(message){
        console.log(message);
    })
    .catch(function(message){
        console.log(message);
    })