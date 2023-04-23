const n: number = 10; // Dimensión del arreglo
const numeros: number[] = [];

// Generamos un número aleatorio entre -10 y 10 para cada posición del arreglo
for (let i = 0; i < n; i++) {
  const numero: number = Math.floor(Math.random() * 21) - 10;
  numeros.push(numero);
}

const positivos = numeros.filter(num => num > 0);
const negativos = numeros.filter(num => num < 0);
const ceros = numeros.filter(num => num === 0);

console.log(`${positivos.length}  positivos, ${negativos.length}  negativos y ${ceros.length} ceros en el Arr.`);