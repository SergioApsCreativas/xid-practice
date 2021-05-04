import { Model } from "sequelize/types";

interface VUserCompleteModel extends Model {
    fullname: string;
    email: string;
    rolid: number;
    password: string;
    departmentid: number;
    roles_name: string;
    department_name: string;
    id?: number;
}


export {
    VUserCompleteModel
}