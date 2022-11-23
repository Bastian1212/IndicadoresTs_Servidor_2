import { Request, Response } from 'express';
import { HistorialPeticiones } from '../../../entities/historialpeticiones/historialPeticiones';
import historialPeticionRepository from '../../../persistence/repositories/historialPeticion/historialPeticion.repository';


class HistorialPeticionesController {

    public getHistorialPeticiones(request : Request, response : Response){
        historialPeticionRepository.getHistorialPeticiones().then(historial => {
            response.json({data : historial})
        }, error => {
            response.status(404).json({status : false});
        })
    }

    public createHistorial(request : Request, response : Response) {

        const idNum : number = Math.floor(Math.random() * 999999);
        let historial = new HistorialPeticiones(
            idNum, 
            request.body.id_imm,
            request.body.tipo, 
            request.body.solicitud,
            request.body.estado,
            request.body.fecha
        )
        historialPeticionRepository.createHistorial(historial)

    }

    public setHistorial(request : Request, response : Response){
        // const DELETE_QUERY = `SELECT id_imm FROM historialpeticiones WHERE id_imm = '${req.body.id}' AND tipo = ${req.body.tipo}`
        // connection.query(DELETE_QUERY, (err, res) =>{
        //     if(err) console.log(err)
        //     else{
        //         var idIndicadores = res.map(function(x) {
        //             return x.id;
        //          });
        //          for(let i=0; i < idIndicadores.length ; i++){ 
        //             const ADD_QUERY = `UPDATE historialpeticiones SET id_imm = '${req.body.D}' WHERE id_imm = "${req.body.id}" AND tipo = ${req.body.tipo};`
        //             connection.query(ADD_QUERY, (err) =>{
        //                 if(err) console.log(err)
        //             })   
        //         }
        //     }
        // })

    }
}


export default new HistorialPeticionesController();
