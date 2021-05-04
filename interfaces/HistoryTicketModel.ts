import { Model } from "sequelize/types";

interface HistoryTicketModel extends Model {
    id?: number;
    ticketid: number;
    date_creation: string;
    title: string;
    senderid: number;
    img: string
}


export {
    HistoryTicketModel
}