import { DataType, DataTypes, Model } from "sequelize";
import { HistorialPeticiones } from "../../../entities/historialpeticiones/historialPeticiones";
import persistence from "../../config/persistence";

class HistorialPeticionesModel extends Model<HistorialPeticiones> {

}

HistorialPeticionesModel.init({
    id : {
        type : DataTypes.STRING, 
        autoIncrement : true, 
        primaryKey : true
    },

    id_imm : {
        type : DataTypes.INTEGER.UNSIGNED,
        autoIncrement : true,
    },

    tipo : {
        type : DataTypes.INTEGER,
        allowNull: false,
    },

    solicitud : {
        type : DataTypes.STRING,
        allowNull: false,
    },

    estudio : {
        type : DataTypes.STRING,
        allowNull: false,
    },

    fecha : {
        type : DataTypes.STRING,
        allowNull: false
    }

}, {
    tableName : "historialpeticiones", 
    timestamps : false, 
    sequelize : persistence
})



export default HistorialPeticionesModel