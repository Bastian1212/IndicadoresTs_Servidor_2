import { error } from 'console';
import { Request, Response } from 'express';
import { Router } from "express";
import { hostname } from 'os';
import { text } from 'stream/consumers';
import { HistorialPeticiones } from "../../../entities/historialpeticiones/historialPeticiones";
import historialPeticionRepository from "../../../persistence/repositories/historialPeticion/historialPeticion.repository";

class HistorialPeticionesController{

    public getHistorialPeticiones(request : Request, response : Response){
        historialPeticionRepository.getHistorialPeticiones().then(historial => {
            response.status(200).json({status : true , data : historial})
        }, error => {
            response.status(404).json({status : false});
        })
    }

    public createHistorial(request : Request, response : Response) {
        let historial = new HistorialPeticiones(
            request.body.id, 
            request.body.id_imm,
            request.body.tipo, 
            request.body.solicitud,
            request.body.estado,
            request.body.fecha
        )
        historialPeticionRepository.createHistorial(historial).then(historial => {
            response.status(200).json({status : true, data: historial})
        }, error => {
            response.status(400).json({status : false })
        })

    }

    public setHistorial(request : Request, response : Response){

    }
}


export default new HistorialPeticionesController();
