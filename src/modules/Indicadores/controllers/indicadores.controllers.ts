import { Request, Response } from 'express';
import { request } from 'http';
import { text } from 'stream/consumers';
import { Indicador } from '../../../entities/indicador/indicador';
import indicadorRepository from '../../../persistence/repositories/indicador/indicador.repository';


class IndicadorController {


    public getTesteo( request : Request, response : Response){
        console.log("hola mundito")
        
        try {
            response.json({saludo : "hola mundo",
                            nombre : "bastian villanueva"})
        } catch (error) {
            console.log("ocurrio un error ")

        }

        // indicadorRepository.getTesteo().then(text  => {
        //     response.status(200).json({status: true, data: text});
        //     console.log("hola mundo ")
        // }, error => {
        //     response.status(404).json({status: false});
        // });

    }
        
            
        
    



    public getIndicadores (request : Request ,response : Response) {
        indicadorRepository.getIndicadores().then(indicadores => {
            response.status(200).json({status : true , data : indicadores})
        }, error => {
            response.status(404).json({status : false});
        });
    }

    public createIndicador (request : Request ,response : Response) {
        
        let indicador = new Indicador(
            request.body.id,
            request.body.CalificacionCORFO, 
            request.body.NumeroIndicador, 
            request.body.MisionUniversitaria,
            request.body.nombre,
            request.body.TipoIndicador, 
            request.body.eje,
            request.body.Unidad,
            request.body.FuenteInformacion,
            request.body.Responsable,
            request.body.Frecuencia,
            0, 
            "Crear", 
            request.body.antiguaid
        );
        console.log(indicador.Aprobado);
        indicadorRepository.createIndicador(indicador).then(indicadores => {
            response.status(201).json({status: true , data : indicadores });

        }, error => {
            response.status(400).json({status : false});
        });

    }



    public setAprobado (request : Request ,response : Response){
        
        const data : any = request.params;
        
        indicadorRepository.setAprobado(data).then(msg => {
            response.status(201).json({status : true, data : msg});
        },error => {
            response.status(400).json({status : false});
        })

    }

    public setPeticion  (request : Request ,response : Response){
        indicadorRepository.setPeticion(request.body.id).then(peticion => {
            response.status(200).json({status : true , data : peticion })
        }, error => { 
            response.status(404).json({status :  false})
        })

    }
    public  deleteIndicador(request : Request ,response : Response){
        const data : any = request.params
        indicadorRepository.deleteIndicador(data).then(msg  => {
            response.status(200).json({status : true , data : msg })
        }, error => {
            response.status(404).json({status :  false})
        })
    }
    

    public editarProyecto(request : Request ,response : Response){

        let indicador = new Indicador(
            request.body.id,
            request.body.CalificacionCORFO, 
            request.body.NumeroIndicador, 
            request.body.MisionUniversitaria,
            request.body.nombre,
            request.body.TipoIndicador, 
            request.body.eje,
            request.body.Unidad,
            request.body.FuenteInformacion,
            request.body.Responsable,
            request.body.Frecuencia,
            0, 
            "Editar", 
            request.body.antiguaid
        );
    }




}

export default new IndicadorController();
