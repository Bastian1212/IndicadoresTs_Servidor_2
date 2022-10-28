import { Request, Response } from 'express';
import { text } from 'stream/consumers';
import { Metas } from '../../../entities/metas/metas';
import metasRepository from '../../../persistence/repositories/metas/metas.repository';
class MetasController {
    public getMetas( request : Request, response : Response){
        metasRepository.getMetas().then(metas =>{
            response.status(200).json({status : true, data : metas})
        }, error =>{
            response.status(404).json({status : false});
        })
    }


    public createMetas( request : Request, response : Response){
       //const generadorid : string =  Math.random().toString(36).substr(2,18);
       console.log(request.body.id) 
       let meta = new Metas(
            request.body.id, 
            request.body.idindicador,
            request.body.fecha,
            request.body.cantidad, 
            "Añadir", 
            0,
            "0"
        );
        metasRepository.createMetas(meta).then(metas => {
            response.status(201).json({status : true, data : metas});
        }, error => {
            response.status(400).json({status : false})
        });
    }

    public setAprobado (request : Request, response : Response){

    }

    public setPeticion( request : Request, response : Response){

    }

    public deleteMetas( request : Request, response : Response){

    }
}



export default  new MetasController();
