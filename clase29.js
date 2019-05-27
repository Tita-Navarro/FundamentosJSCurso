/* Una característica muy solicitada en cualquier sitio dinámico es solicitar datos a un servidor, denominado
API. Para esto normalmente se utiliza Ajax.

Ajax recibe dos parámetros los cuales son la url de la API y un objeto donde pondrás la configuración que se 
utilizará para realizar la petición. En la configuración se añaden dos funciones para manejar cuando la petición
se realizó correctamente y cuando la petición falla.

JavaScript internamente cuenta con una función llamada fetch que también realiza peticiones a una API. Al igual que 
Ajax necesita dos parámetros, una url y una configuración, pero si solo le mandas la url fetch usará una
configuración por defecto donde el método HTTP será GET.

fetch te regresa una promesa, esa promesa al resolverse te da los datos de repsuesta y tiene un método llamado 
json que te regresa otra promesa con los datos en formato JSON.

Las promesas resuelven el problema del Callback Hell haciendo que una promesa pueda devolver otra promesa y en
lugar de ser anidadas como los callbacks, estas priomesas son encadenadas. */

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