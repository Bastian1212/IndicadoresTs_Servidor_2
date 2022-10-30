export class HistorialPeticiones{
    public id : number;
    public id_imm : number;
    public tipo : number;
    public solicitud : string;
    public estudio :string;
    public fecha : string;



    constructor(id : number,id_imm : number,tipo : number, solicitud : string, estudio: string, fecha: string){
        this.id = id;
        this.id_imm = id_imm;
        this.tipo = tipo; 
        this.solicitud = solicitud; 
        this.estudio = estudio;
        this.fecha = fecha; 
    }
}