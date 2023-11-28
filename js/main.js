
function saludarUsuario() {
  let nombre;
  let mensaje;

  do {
    nombre = prompt("Por favor, ingresa tu nombre:");
    if (nombre) {
      mensaje = "¡Hola, " + nombre + "! Bienvenido a StarShop.";
    } else {
      mensaje = "No ingresaste un nombre. Por favor, intenta de nuevo.";
    }
    alert(mensaje);
  } while (!nombre);
  return mensaje;
}
let mensajePersonalizado = saludarUsuario();
alert(mensajePersonalizado);
let suma = 0;


do {
  numero = parseFloat(prompt("Ingresa el monto de los productos para saber cuanto necesitas! (ingresa un número negativo para detenerse):"));
  if (!isNaN(numero)) {
    if (numero >= 0) {
      suma += numero;
    }
  }
} while (numero >= 0);

alert("El monto necesario es: " + suma);







class Producto{
  constructor(nombre, precio, img) {
    this.clase = nombre;
    this.precio = precio;
    this.img = img;
  }

}

const ABRIGO01 = new Producto("campera01", 3000, "https://acdn.mitiendanube.com/stores/001/069/443/products/perr_inv21_t2_dic0550_macbeth-6715b387b2b366458916940927411392-480-0.JPG");
const ABRIGO02 = new Producto("campera02", 7000, "https://acdn.mitiendanube.com/stores/001/069/443/products/perrinv23_tanda2_25778_kiwik_off_white-b17dbdbe27dc7b7ec516956869993128-480-0.jpg");
const ABRIGO03 = new Producto("campera03", 12000,"https://acdn.mitiendanube.com/stores/001/069/443/products/inv23_19650_frimley_vino-0373277559ccf89c9516838080678603-480-0.jpg");


const Productos = [ABRIGO01, ABRIGO02, ABRIGO03, ];

Productos.forEach(Producto =>{
  let div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
                  <p>nombre ${Producto.clase} </p>
                  <p>precio ${Producto.precio} </p>
                  <img src= "${Producto.img}"/>
                  <button> Agregar al carrito </button>
    ` 
    contenedorProductos.appendChild(div);
})




let productos = [
  {itemId:"campera01", precio: 3000},
  {itemId:"campera02", precio: 7000},
  {itemId:"campera03", precio: 12000},
];

let precioMinimo = parseFloat(prompt("Cuanto podés gastar?"));

if(isNaN(precioMinimo)){
  console.log("por favor ingresa numeros")
}else{
  let precioFiltrados = productos.filter(function(producto){
    return producto.precio <= precioMinimo;
  });
  alert("los productos que podes comprar son:", precioFiltrados)
}





