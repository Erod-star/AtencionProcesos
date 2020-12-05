let greet = require('./greet');

greet();

let greet2a=require('./greet2');
greet2a.greet();
let greet2b=require('./greet2').greet;
greet2b();

let greet3a=require('./greet3');
greet3a.greet();
let greet3b=require('./greet3');
greet3b.message="Saludos con cambio desde greet3";
greet3b.greet();
console.log(greet3a);

let greet4=require('./greet4');
let greet4a=new (greet4);
let greet4b=new (greet4);
greet4a.greet();
greet4b.message="Saludos con cambio desde greet4";
greet4b.greet();
console.log(greet4a);

let elevador=require('./Elevador');
let elev1 = new elevador(8);
let elev2 = new elevador(9);

elev1.mover(5);
console.log(elev1.estado());
elev1.cerrarPuerta();
console.log(elev1.estado());
elev1.mover(1);
console.log(elev1.estado());