let nombre= "Tita", apellido = 'Navarro';
const nombreEnMayus = nombre.toUpperCase();
const apellidoMinus = apellido.toLowerCase();
const primerLetra = nombre.charAt(0);
const cantidadDeLetras = nombre.length;
//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido.toUpperCase()}`
//const str = nombre.charAt(1) + nombre.charAt(2);
const str = nombre.substr(1,2);