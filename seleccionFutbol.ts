export class SeleccionFutbol{
    protected nombre: string;
   protected ganador: boolean;
    constructor (nombre: string, ganador: boolean){
      this.nombre = nombre;
      this.ganador = ganador;
    }
  
    protected jugar(){
      console.log('juegan');
    }
  
    public setColor(color: string){
      this.nombre= color;
    }
  
    public getColor(){
      return this.ganador;
    }
  }
  

  