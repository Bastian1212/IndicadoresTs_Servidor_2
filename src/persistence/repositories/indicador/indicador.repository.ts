import { Model } from "sequelize";
import { Indicador } from "../../../entities/indicador/indicador";
import persistence from "../../config/persistence";
import IndicadorModel from "../../models/indicador/Indicador.model";

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
        console.log(`desde funciones ${indicador.CalificacionCORFO}`);
        console.log(indicador)
        let nuevoIndicador : any = await IndicadorModel.create(indicador);
        console.log(nuevoIndicador.CalificacionCORFO)
        console.log("paso a aki")
        return <Indicador> nuevoIndicador;
    }


    // public async deleteIndicador(id : string) : Promise<Array<Indicador>>{
    //     const myArray = id.split("_");
    //     id = myArray[0];
    //     const solicitud = myArray[1];
    //     const now = myArray[2];
    //     const D = Math.random().toString(36).substr(2,18)
    //     const ADD_QUERY = `UPDATE indicadores SET id ='${D}',Aprobado = 2, antiguaid = '${id}' WHERE id = '${id}';`

    //     let indicador : Array<any> = await persistence.query(ADD_QUERY, {
    //         model: IndicadorModel, 
    //         maptoModel: true
    //     })

    //     // sHistorial.setHistorial(0,{body: { D: D, id: id, tipo: 1}} ); 

    //     // if(solicitud === 'Eliminar'){
    //     //     sHistorial.createHistorial(0,{body: { id_imm: `${D}`, tipo: 1, solicitud: 'Eliminar', estado: 'Aprobado', fecha: now }} ); 
    //     // }else{
    //     //     sHistorial.createHistorial(0,{body: { id_imm: `${D}`, tipo: 1, solicitud: 'Añadir', estado: 'Rechazado', fecha: now }} );   
    //     // }

    //     if (indicador.length == 0 ){
    //         throw new Error();

    //     }else{ 
    //         return (<Array<Indicador>> indicador)
    //     }
        
        
        
    // }

    // public setPeticion(id : string) : Promise<Indicador> {

    //     let peticion : any 
    //     if(peticion == null){
    //         throw new Error(); 
    //     }else { 
            
    //     }
        
    // }
    

}


export default new IndicadoreRepository();