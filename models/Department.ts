import { DataTypes } from 'sequelize';
import { db } from "../config/sequelize/config.sequelize"
import { DepartmentModel } from "../interfaces/DepartmentModel"

const Department = db.define<DepartmentModel>('Department', {
    name: DataTypes.STRING
}, {
    timestamps: false,
    tableName: 'departamento'
});

export {
    Department
}