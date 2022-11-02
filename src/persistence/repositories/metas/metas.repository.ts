import { Model, where } from "sequelize";
import app from "../../../../app";
import { Metas } from "../../../entities/metas/metas";
import persistence from "../../config/persistence";
import MetasModel from "../../models/metas/Metas.model";

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

    public async setAprobado(id : number)   {
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

    public async deleteMetas( id : number ){
        try {
            const resultado : any  = await MetasModel.destroy({
                where : {id}
            })
        } catch (error) {
            throw new Error();
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