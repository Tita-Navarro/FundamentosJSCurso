var obj1 = {
  obj2: {
    nombre: "Tita",
    edad: 29
  }
};

function saludar(obj) {
  var { nombre, edad } = obj.obj2;
  console.log(`Hola me llamo ${nombre} y tengo ${edad} años`);
}
saludar(obj1);
