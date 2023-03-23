const autos = ["Etios", "fiat Uno", 208]
console.log(autos)
console.log(autos.push(504))//para agregar un elemento al final del listado
console.log(autos.pop())//quita el ultimo elemento al final del listado

const frutas = ["banana", "manzana", "tomate", "naranja"]
console.log(frutas)
for(i=0; i<frutas.length; i++) {
    console.log(frutas[i])
}

document.getElementById("lista").style.color="red"

let persona = {
    nombres: ["Rodrigo", "Juan"],
    edad: 32,
    intereses: ["musica", "esqui"]

}
console.log(persona)

let autos2 = [{
    "marca": "Honda",
    "modelo": "Civic",
    "color": "Negro",
    "año": 2010
},
{
    "marca": "Volkswagen",
    "modelo": "golf",
    "color": "Blanco",
    "año": 2015
}]    
console.log(autos2)