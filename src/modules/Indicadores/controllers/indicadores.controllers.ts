import { Request, response, Response } from 'express';
import { Indicador } from '../../../entities/Indicador/indicador';
import indicadorRepository from '../../../persistence/repositories/indicador/indicador.repository';

class IndicadorController {

    public getIndicadores (res : Response, req : Request) {
        indicadorRepository.getIndicadores().then(indicadores => {
            res.status(200).json({status : true , data : indicadores})
        }, error => {
            response.status(404).json({status : false});
        });
    }

    public createIndicador (res : Response, req : Request) {

        let indicador = new Indicador(
            req.body.id,
            req.body.CalificacionCORFO, 
            req.body.NumeroIndicador, 
            req.body.MisionUniversitaria,
            req.body.nombre,
            req.body.TipoIndicador, 
            req.body.eje,
            req.body.Unidad,
            req.body.FuenteInformacion,
            req.body.Responsable,
            req.body.Frecuencia,
            req.body.Aprobado, 
            req.body.peticion, 
            req.body.idMetrica,
            req.body.antiguaid
        )
        indicadorRepository.createIndicador(indicador).then(indicadores => {
            response.status(201).json({status: true , data : indicadores });

        }, error => {
            response.status(400).json({status : false});
        });

    }

    public setMetricas (res : Response, req : Request) { 

    }




    public setAprobado (res : Response, req : Request){ 

    }

    public setPeticion  (res : Response, req : Request){
        indicadorRepository.setPeticion(req.body.id).then(peticion => {
            response.status(200).json({status : true , data : peticion })
        }, error => { 
            response.status(404).json({status :  false})
        })

    }

    public deleteIndicador (res : Response, req : Request){ 
        indicadorRepository.deleteIndicador(req.body.id).then(indicador => {
            response.status(200).json({status : true, data : indicador});
        }, error => {
            response.status(404).json({status : false})
        })
    }




}

export default new IndicadorController();
