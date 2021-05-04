import { Model } from "sequelize/types";

interface TicketModel extends Model {
    departmentid: number;
    issue: string;
    status: string;
    urgence: number;
    time_response: number;
    img?: string;
    description: string;
    clientid: number;
    userattendedid: number;
    useractiveid:number;
    id: number;
}


export {
     TicketModel
}