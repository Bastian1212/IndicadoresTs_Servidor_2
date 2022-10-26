import { Model } from "sequelize";
import { Metas } from "../../../entities/metas/metas";
import persistence from "../../config/persistence";
import MetasModel from "../../models/metas/Metas.model";

class MetasRepository {

    public async getMetas() : Promise<Array<Metas>>{
        let metas : Array<any> = await MetasModel.findAll();

        if (metas.length == 0 ){
            throw new Error();
        }else{
            return (<Array<Metas>> metas)
        }
    }

    public async createMetas(meta : Metas) : Promise<Metas>{
        let nuevaMeta : any = await MetasModel.create(meta);
        return <Metas> nuevaMeta;

    }

    public async setAprobado(id : string) : any {


        
    }
 


}

export default new MetasRepository();