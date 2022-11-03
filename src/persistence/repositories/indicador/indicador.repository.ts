import { triggerAsyncId } from "async_hooks";
import { Model } from "sequelize";
import { now } from "sequelize/types/utils";
import { Indicador } from "../../../entities/indicador/indicador";
import persistence from "../../config/persistence";
import IndicadorModel from "../../models/indicador/Indicador.model";


const servicios = require("../../historialPeticiones/controllers")
const sHistorial = new servicios.HistorialPeticionesController();


class IndicadoreRepository {

    public getTesteo() : Promise<any> {
        
        let text  : any   = "hola mundo"; 
        if (text == null ){
            throw new Error()
        } else {
            return (<any> text);
        }

    }

    public async getIndicadores() :  Promise<Array<Indicador>>{
        let indicadores : Array<any> = await IndicadorModel.findAll();

        if (indicadores.length == 0 ) {
            throw new Error();

        }else {
            return (<Array<Indicador>> indicadores)

        }

    }

    public async  createIndicador(indicador : Indicador) : Promise<Indicador> {
        let nuevoIndicador : any = await IndicadorModel.create(indicador);
        console.log(nuevoIndicador.CalificacionCORFO) 
        return <Indicador> nuevoIndicador;
    }


    

    public  async  setAprobado(data : any ){
        const myArray = data.split("_");
        const id : number  =  parseInt(myArray[0],10);
        const  solicitud: string = myArray[1];
        const now : string = myArray[2];
        const indicador : any = await IndicadorModel.findOne({
            where : {id}, 
        });

        if(!indicador){
            throw new Error();
        }
        indicador.set({
            Aprobado : 1 

        })
        indicador.save()
         if(solicitud === "Añadir"){
            sHistorial.createHistorial(0, {
                body : {
                    id_imm : id, 
                    typo  :1, 
                    solicitud : "Anadir", 
                    estado: "Aprobado", 
                    fecha : now
                }
            });
        }else{
            sHistorial.createHistorial(0, {
                body : {
                    id_imm : id, 
                    typo  :1, 
                    solicitud : "Eliminar", 
                    estado: "Rechazado", 
                    fecha : now
                }
            });

         }

    }

    public async  setPeticion(id : number) {
        
        const indicador : any = await IndicadorModel.findOne({
            where : {id}, 
        });
        if(!indicador){
            throw new Error();
            
        }
        indicador.set({
            Aprobado : 0, 
            Peticion : "Eliminar"

        })
        indicador.save();

        return "ok"

    }

    public async  deleteIndicador(data : any ){
        const myArray = data.split("_");
        const id : number  =  parseInt(myArray[0],10);
        const  solicitud: string = myArray[1];
        const now : string = myArray[2];

        const idNum : number = Math.floor(Math.random() * 999999);
        const indicador : any = await IndicadorModel.findOne({
            where : {id}, 
        });
        if(!indicador){
            throw new Error();
            
        }
        indicador.set({
            id : idNum, 
            tipo : 1,
            Aprobado : 2, 
            antiguaid : id 
        })

        // sHistorial.setHistorial(0, {
        //     idNum  : idNum, 
        //     id : id, 
        //     tipo : 1
        // })

        if(solicitud === "Eliminar"){
            sHistorial.createHistorial(0, {
                body : {
                    id_imm : idNum, 
                    tipo  :1, 
                    solicitud : "Eliminar", 
                    estado: "Aprobado", 
                    fecha : now
                }
            });
            }else{
            sHistorial.createHistorial(0, {
                body : {
                    id_imm : idNum, 
                    tipo  :1, 
                    solicitud : "Añadir", 
                    estado: "Rechazado", 
                    fecha : now
                }
            });

            }
            indicador.save()

            return "ok "


    }

    public async editarIndicador(id : string, indicador: Indicador){
        const indicador_ :any = await IndicadorModel.findByPk(id)

        if(!indicador_){
            throw new Error()
        }


        indicador_.CalificacionCORFO = indicador.CalificacionCORFO;
        indicador_.NumeroIndicador = indicador.NumeroIndicador;
        indicador_.MisionUniversitaria = indicador.MisionUniversitaria;
        indicador_.nombre = indicador.nombre;
        indicador_.TipoIndicador = indicador.TipoIndicador;
        indicador_.eje = indicador.eje;
        indicador_.Unidad = indicador.Unidad;
        indicador_.FuenteInformacion = indicador.FuenteInformacion;
        indicador_.Responsable = indicador.Responsable;
        indicador_.Frecuencia = indicador.Frecuencia;
        indicador_.Aprobado = indicador.Aprobado;
        indicador_.Peticion = indicador.peticion;

        indicador_.save();
        return (<string> "ok")
    } 
    

}


export default new IndicadoreRepository();