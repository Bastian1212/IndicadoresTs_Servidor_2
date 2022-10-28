import { triggerAsyncId } from "async_hooks";
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


    public async deleteIndicador(id : string){

        try {

            await IndicadorModel.destroy({
                where :{
                    id,
                },
            });
            
        } catch (error) {
            throw new Error();
        }
    


        // const myArray = id.split("_");
        // id = myArray[0];
        // const solicitud = myArray[1];
        // const now = myArray[2];
        // const D = Math.random().toString(36).substr(2,18)
        // const ADD_QUERY = `UPDATE indicadores SET id ='${D}',Aprobado = 2, antiguaid = '${id}' WHERE id = '${id}';`

        // let indicador : Array<any> = await persistence.query(ADD_QUERY, {
        //     model: IndicadorModel, 
        //     maptoModel: true
        // })

        // sHistorial.setHistorial(0,{body: { D: D, id: id, tipo: 1}} ); 

        // if(solicitud === 'Eliminar'){
        //     sHistorial.createHistorial(0,{body: { id_imm: `${D}`, tipo: 1, solicitud: 'Eliminar', estado: 'Aprobado', fecha: now }} ); 
        // }else{
        //     sHistorial.createHistorial(0,{body: { id_imm: `${D}`, tipo: 1, solicitud: 'Añadir', estado: 'Rechazado', fecha: now }} );   
        // }        
    }

    public setPeticion(id : string) {

        let peticion : any 
        if(peticion == null){
            throw new Error(); 
        }else { 
            
        }
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