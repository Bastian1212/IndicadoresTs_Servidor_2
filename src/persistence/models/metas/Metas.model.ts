import { DataTypes, Model } from "sequelize";
import { Metas } from "../../../entities/metas/metas";
import persistence from "../../config/persistence";

class MetasModel extends Model<Metas>{


}


MetasModel.init({
    id: {
        type: DataTypes.STRING,
        autoIncrement: true,
        primaryKey: true
    },
    idindicador: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
    },
    fecha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    Peticion: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    Aprobado: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
    },

    antiguaid: {
        type: DataTypes.STRING,
        allowNull: false
    },
   
}, {
    tableName: "metas", 
    timestamps : false,
    sequelize : persistence
})


export default MetasModel;