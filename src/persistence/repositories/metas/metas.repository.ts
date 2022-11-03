import { Model, where } from "sequelize";
import app from "../../../../app";
import { Metas } from "../../../entities/metas/metas";
import persistence from "../../config/persistence";
import MetasModel from "../../models/metas/Metas.model";


const servicios = require("../../historialPeticiones/controllers")
const sHistorial = new servicios.HistorialPeticionesController();



class MetasRepository {

    public async getMetas() : Promise<Array<Metas>>{
        let metas : Array<any> = await MetasModel.findAll();

        if (metas.length === 0 ){
            throw new Error();
        }else{
            return (<Array<Metas>> metas);
        }
    }

    public async createMetas(meta : Metas) : Promise<Metas>{
        console.log(meta);
        let nuevaMeta : any = await MetasModel.create(meta);
        return <Metas> nuevaMeta;
     
        

    }

    public async setAprobado(data : any )   {
        const myArray = data.split("_")
        const id : number = parseInt(myArray[0],10)
        const solicitud : string =  myArray[1]; 
        const now : string = myArray[2];

        if(solicitud === "Añadir"){
            sHistorial.createHistorial(0, {
                body : {
                    id_imm : id, 
                    typo  :2, 
                    solicitud : "Anadir", 
                    estado: "Aprobado", 
                    fecha : now
                }
            });
        }else{
            sHistorial.createHistorial(0, {
                body : {
                    id_imm : id, 
                    typo  :2, 
                    solicitud : "Eliminar", 
                    estado: "Rechazado", 
                    fecha : now
                }
            });

         }

        


        const meta : any   = await MetasModel.findOne({
            where : {id},
        });
        if (!meta){
            throw new Error();
        }
        meta.set({
            Aprobado : 1
        })
        meta.save()

    }

    public async setPeticion(data : any ){
        const myArray = data.split("_");
        const id : number  =   parseInt(myArray[0],10);
        const fecha : string = myArray[1];

        const meta : any = await MetasModel.findOne({
            where : {id}
        });

        if(!meta){
            throw new Error();
        }

        meta.set({
            Peticion : "Eliminar",
            Aprobado : 0,
            fecha : fecha 
        })

        meta.seve();
    }

    public async deleteMetas(data : any ){
        const myArray = data.split("_");
        const id : number =  parseInt(myArray[0],10);
        const solicitud : string = myArray[1];
        const now :string  = myArray[2]; 

        const idNum : number = Math.floor(Math.random() * 999999); 

        const meta : any = await MetasModel.findOne({
            where :  {id},
        });

        if(!meta) {
            throw new Error();
        }
        
        meta.set({
            idindicador : idNum,
            Aprobado :2,

        })
        meta.save()
        // sHistorial.setHistorial(0, {
        //     idNum  : idNum, 
        //     id : id, 
        //     tipo : 2
        // })

        if(solicitud === "Eliminar"){
            sHistorial.createHistorial(0, {
                body : {
                    id_imm : idNum, 
                    tipo  :2, 
                    solicitud : "Eliminar", 
                    estado: "Aprobado", 
                    fecha : now
                }
            });
            }else{
            sHistorial.createHistorial(0, {
                body : {
                    id_imm : idNum, 
                    tipo  :2, 
                    solicitud : "Añadir", 
                    estado: "Rechazado", 
                    fecha : now
                }
            });

            }
    } 


    public async deleteMetasIndicador(data : any ){
        const {idindicador , antiguaid, antiguaidN , Aprobado} = data
        const idNum : number = Math.floor(Math.random() * 999999);
        const metasI : any = await MetasModel.findOne({
            where :{idindicador}
        }) 
        if(!metasI){
            throw new Error();
        }
        metasI.set({
            idindicador : idNum,
            Aprobado : Aprobado, 
            antiguaid : antiguaidN, 
        })
        metasI.seve();


    }


}

export default new MetasRepository();