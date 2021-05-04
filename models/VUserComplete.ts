import { DataTypes } from 'sequelize';
import { db } from "../config/sequelize/config.sequelize"
import { VUserCompleteModel} from "../interfaces/VUserCompleteModel"

const VUserComplete = db.define<VUserCompleteModel>('VUserComplete', {
    fullname: DataTypes.STRING,
    password: DataTypes.STRING,
    rolid: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    email: DataTypes.STRING,
    departmentid: DataTypes.NUMBER,
    roles_name: DataTypes.STRING,
    department_name: DataTypes.STRING,
    id: {
        type: DataTypes.NUMBER,
        autoIncrement: true,
        primaryKey: true,

    }
}, {
    timestamps: false,
    tableName: 'v_user_complete'
});

export {
    VUserComplete
} 