export class Indicador{
    public id: string;
    public CalificacionCORFO : string;
    public NumeroIndicador: string;
    public MisionUniversitaria : string;
    public nombre : string;
    public TipoIndicador:  string;
    public eje : string;
    public Unidad : string;
    public FuenteInformacion : string;
    public Responsable: string;
    public Frecuencia: string;
    public Aprobado : number;
    public peticion : string;
    public idMetrica : number;
    public antiguaid : string;


    constructor(id : string,
            CalificacionCORFO : string,
            NumeroIndicador : string,
            MisionUniversitaria : string,
            nombre : string,
            TipoIndicador : string,
            eje : string,
            Unidad : string,
            FuenteInformacion : string,
            Responsable : string,
            Frecuencia : string,
            Aprobado : number,
            peticion : string,
            idMetrica : number,
            antiguaid : string

            ){
            this.id = id;
            this.CalificacionCORFO = CalificacionCORFO;
            this.NumeroIndicador = NumeroIndicador;
            this.MisionUniversitaria = MisionUniversitaria; 
            this.nombre = nombre;
            this.TipoIndicador = TipoIndicador; 
            this.eje = eje; 
            this.Unidad = Unidad;
            this.FuenteInformacion = FuenteInformacion;
            this.Responsable =  Responsable; 
            this.Frecuencia =  Frecuencia; 
            this.Aprobado = Aprobado;
            this.peticion = peticion;
            this.idMetrica = idMetrica; 
            this.antiguaid =antiguaid;
    }
        
}