export class Metas {
    public id : string;
    public idindicador :string;
    public fecha : string;
    public cantidad: number;
    public Peticion : string;
    public Aprobado : number;
    public antiguaid : string;



    constructor(id : string, fecha : string, cantidad : number, Peticion : string, Aprobado : number , antiguaid : string){
        this.id = id;
        this.fecha = fecha; 
        this.cantidad = cantidad; 
        this.Peticion = Peticion;
        this.Aprobado = Aprobado;
        this.antiguaid = antiguaid; 
    }
}