import { Model } from "sequelize";
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

    // public async setAprobado(id : string)  {
    //     const meta    = await MetasModel.findByPk(id);
    //     if (!meta){
    //         //throw new Error();
    //     }

    //     // meta.Aprobado  = 1;





    // }
 


}

export default new MetasRepository();