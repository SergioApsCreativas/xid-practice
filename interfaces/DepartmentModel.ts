import { Model } from "sequelize/types";


export interface DepartmentModel extends Model {
    id: number;
    name: string;
}