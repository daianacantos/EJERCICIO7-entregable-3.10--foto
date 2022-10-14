import { SeleccionFutbol } from "./seleccionFutbol";

export class Entrenador extends SeleccionFutbol{
  private cantEntrenador: number;

  constructor (color: string, ganador: boolean, cantEntrenador: number){
    super(color, ganador);
    this.cantEntrenador = cantEntrenador;
  }
  
  public Entrenar(){
    super.jugar();
  }
}

