import { RoleDTO } from "../dto/RoleDTO";
import { RoleModel } from "../model/RoleModel";

export class RoleConverter{
    static toDTO(val: RoleModel): RoleDTO {
        return {
            id: val.id,
            name: val.name,
            type: val.type
        }
    }
    
    static toDtoList(val: RoleModel[]): RoleDTO[] {
        return val.map(element =>  {
            return {
                id: element.id,
                name: element.name,
                type: element.type
            }
        });
    }

    static toModel(val: RoleDTO): RoleModel {
        return {
            id: val.id,
            name: val.name,
            type: val.type
        };
    }


}