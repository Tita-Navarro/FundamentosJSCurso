/*Una función asíncrona va a ser como una función normal, pero poniendo código asíncrono de forma que sea más fácil
 de leer de forma síncrona.

Para declarar una función asíncrona se usa la palabra reservada async, luego de eso declaras tu función de forma 
normal. Dentro de una función asíncrona cuentas con otra palabra reservada llamada await, lo que hará esta palabra 
es indicar que se debe esperar a que termine de ejecutarse ese fragmento de código antes de continuar.

Vamos a realizar peticiones con fetch a la API de yts para pedirle películas según su categoría y mostrarlas 
dentro de PlatziVideo. Sin el uso de funciones asíncronas para cada fetch tendríamos que usar los métodos then y 
catch, en cambio gracias a async/await solo debemos escribir la palabra await antes de cada promesa. */

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

    /* $.ajax('https://randomuser.me/api', {
        method: 'GET', 'POST', 'PUT', 'DELETE'
        success: function(data){
            console.log(data)
        },
        error: function(error){
            console.log(error)
        }
    })
    Este es un llamado XMLHttpRequest */

    fetch('https://randomuser.me/api')
        .then(function(response){
            //console.log(response)
            return response.json();
        })
        .then(function(data){
            console.log('user', data.results[0].name.first)
        })
        .catch(function(){
            console.log('Something was wrong')
        })
    // async function load (){
    //     //await
    // }
    // load() *Aquí hacemos el llamado de la función después de haberla creado anteriormente*

    (async function load(){

        fetch('https://yts.am/api/v2/list_movies.json?genre=action')
    })() // Para autoejecutar la función asincrona