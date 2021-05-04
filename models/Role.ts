import {DataTypes } from "sequelize";
import { db } from "../config/sequelize/config.sequelize"
import { RoleModel } from "../interfaces/RoleModel"

const Role = db.define<RoleModel>('Role', {
    name: DataTypes.STRING,
    type: DataTypes.STRING
}, {
    timestamps: false,
    tableName: 'roles'
});


export {
    Role
}