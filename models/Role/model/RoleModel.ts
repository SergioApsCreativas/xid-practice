const { Model} = require('sequelize');

export class RoleModel extends Model {
    id: number;
    name: string;
    type: string 
}