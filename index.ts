import { SeleccionFutbol } from "./seleccionFutbol";
import { Masajista } from "./Masajista";
import { Entrenador } from "./Entrenador";


let SeleccionFutbol1 = new SeleccionFutbol('verde', false);
console.log(SeleccionFutbol1.getColor());

let Masajista1 = new Masajista ("mujer", false);

console.log(Masajista1.getTipoMasaje());

let Entrenador1= new Entrenador('celeste', true, 4);

console.log( Entrenador1.Entrenar()) 

