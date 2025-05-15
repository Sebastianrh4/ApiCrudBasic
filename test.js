
//push
/* let frutas = ['manzana', 'banana'];
'use strict';

frutas.push('naranja');
console.log('Producto agregado', frutas);
 */
//filter
const palabras = ['auto', 'Avión', 'camión', 'bicicleta', 'Aguacate', 'sol'];

const palabrasConA = palabras.filter(p => p.toLowerCase().startsWith('a'));

console.log('Palabras con la incial A: ',palabrasConA);



let globalVar = 'soy global';

console.log(globalVar);