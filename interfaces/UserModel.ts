import { Model } from "sequelize/types";

interface UserModel extends Model {
    fullname: string;
    email: string;
    password: string;
    rolid: number;
    departmentid: number;
}


export {
     UserModel
}