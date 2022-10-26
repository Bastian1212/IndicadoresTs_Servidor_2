export class HistorialPeticiones{
    public id : string;
    public id_imm : string;
    public tipo : number;
    public solicitud : string;
    public estudio :string;
    public fecha : string;



    constructor(tipo : number, solicitud : string, estudio: string, fecha: string){
        this.tipo = tipo; 
        this.solicitud = solicitud; 
        this.estudio = estudio;
        this.fecha = fecha; 
    }
}