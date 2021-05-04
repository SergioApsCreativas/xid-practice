import { Model } from "sequelize/types";


export interface RoleModel extends Model {
    id: number;
    name: string;
    type: string;
}