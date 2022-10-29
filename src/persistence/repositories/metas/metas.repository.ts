import { Model, where } from "sequelize";
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


}

export default new MetasRepository();