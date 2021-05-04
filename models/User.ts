import { DataTypes } from 'sequelize';
import { db } from "../config/sequelize/config.sequelize"
import { UserModel } from "../interfaces/UserModel"

const User = db.define<UserModel>('User', {
    fullname: DataTypes.STRING,
    password: DataTypes.STRING,
    rolid: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    email: DataTypes.STRING,
    departmentid: DataTypes.NUMBER
}, {
    tableName: 'user'
});

export {
    User 
}