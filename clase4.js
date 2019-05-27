let nombre = 'Tita', edad= 29;
function imprimeEdad () {
    console.log(`${nombre} tiene ${edad} años`);
}
imprimeEdad();

function imprimeEdad2 (n, e){
    console.log(`${n} tiene ${e} años`);
}
imprimeEdad2 (nombre, edad);
imprimeEdad2('Andrés', 32);
imprimeEdad2('Julio', 35);

/**
 * Las funciones son pedazos de codigo 
 * reutilizables 
 * 
 * Para declarar una funcion se emplea la 
 * palabra reservada function
 * 
 * function nombreFuncion (parametros)
 * {
 *    cuerpo de la funcion, cod reutilizable
 * }
 */
//Si una función la creamos con parametros
 //Pero no se los enviamos, va a salir error
 //Intentará imprimir pero pondrá undefined en los
 //parametros que no ingresemos. Esto debido a
 // que js es debilmente tipado