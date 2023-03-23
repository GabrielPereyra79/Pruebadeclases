//PUNTO 1
function UnaFuncion() {
   console.log(1);
   return "Buen dia";
}

const saludo = UnaFuncion();
console.log(saludo);

//PUNTO 2
function resta (a, b) {
    return a - b;
}
const resultado = resta (10, 8);
console.log(resultado);

//PUNTO 4
function calcularCuadrado(lado) {
    const perimetro = lado * 4;
    const superficie = lado ** 2;
  
    console.log(`El perímetro del cuadrado es: ${perimetro}`);
    console.log(`La superficie del cuadrado es: ${superficie}`);
  }
  
  calcularCuadrado(5);
  

//PUNTO 5
function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * (5/9);
    return celsius;
  }
  const fahrenheit = 68;
const celsius = fahrenheitToCelsius(fahrenheit);
console.log(celsius); 

//PUNTO 9
// Pedir al usuario que ingrese la nota
let nota = prompt("Ingresa la nota del alumno:");

// Convertir la nota a un número
nota = Number(nota);

// Verificar en qué rango de notas se encuentra la nota ingresada
if (nota >= 0 && nota < 3) {
  console.log("Muy deficiente");
} else if (nota >= 3 && nota < 5) {
  console.log("Insuficiente");
} else if (nota >= 5 && nota < 6) {
  console.log("Suficiente");
} else if (nota >= 6 && nota < 7) {
  console.log("Bien");
} else if (nota >= 7 && nota < 9) {
  console.log("Notable");
} else if (nota >= 9 && nota <= 10) {
  console.log("Sobresaliente");
} else {
  console.log("Nota inválida");
}




 