import { SeleccionFutbol } from "./seleccionFutbol";


export class Masajista extends SeleccionFutbol{
  private TipoGenero: string;

  public setTipoGenero(Genero: string){
    this.TipoGenero = Genero;
  }

  public getTipoMasaje(){
    return this.getTipoMasaje;
  }

  public masajear(){
    super.jugar();
  }

}

