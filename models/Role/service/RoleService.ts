import { RoleModel } from "../model/RoleModel";

export class RoleService {
     public static async listRoles(): Promise<RoleModel[]>{
         try {
             return await RoleModel.findAll();
         } catch (error) {
             console.log(error)
             throw error;
         }
     }
}