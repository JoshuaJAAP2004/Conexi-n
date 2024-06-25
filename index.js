// Ejemplo de una función que saluda al usuario
function saludar(nombre) {
    console.log(Hola, ${nombre}! Bienvenido a JavaScript.);
}

// Llamamos a la función saludar con un nombre específico
saludar("Juan");

// Ejemplo de declaración de variables y estructuras de control
let edad = 25;
if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

// Ejemplo de un array y bucle for
let colores = ["rojo", "verde", "azul"];
for (let i = 0; i < colores.length; i++) {
    console.log(Color ${i + 1}: ${colores[i]});
}

// Ejemplo de función flecha (arrow function)
const sumar = (a, b) => {
    return a + b;
}

console.log(La suma de 3 y 5 es ${sumar(3, 5)}.);

// Ejemplo de objeto y acceso a propiedades
let persona = {
    nombre: "Ana",
    edad: 30,
    ciudad: "Madrid"
};

console.log(${persona.nombre} tiene ${persona.edad} años y vive en ${persona.ciudad}.);

// Ejemplo de manejo de eventos (click en un botón)
document.getElementById("miBoton").addEventListener("click", function() {
    alert("¡Haz hecho clic en el botón!");
});