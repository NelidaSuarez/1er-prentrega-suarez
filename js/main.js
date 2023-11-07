let numero = prompt("Por favor, ingresa un número:");


if (numero > 0) {
  alert("El número es positivo");
} else if (numero < 0) {
  alert("El número es negativo");
} else {
  alert("El número es cero");
}







let minimo = parseInt(prompt("Ingresa el número mínimo:"));
let maximo = parseInt(prompt("Ingresa el número máximo:"));
let contadorPares = 0;
for (let i = minimo; i <= maximo; i++) {
  if (i % 2 === 0) {
    contadorPares++;
  }
}
alert("En el rango del " + minimo + " al " + maximo + " hay " + contadorPares + " números pares.");







for (let i = 1; i <= 3; i++) {
    alert(i);
  }


  let n = 1;
  while (n <= 5) {
    alert(n);
    n++;
  }







let suma = 0;


do {
  numero = parseFloat(prompt("Ingresa un número (ingresa un número negativo para detenerse):"));
  if (!isNaN(numero)) {  
    if (numero >= 0) {
      suma += numero;  
    }
  }
} while (numero >= 0);

alert("La suma de los números ingresados es: " + suma);