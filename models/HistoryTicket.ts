import { DataTypes } from 'sequelize';
import { db } from "../config/sequelize/config.sequelize"
import { HistoryTicketModel } from "../interfaces/HistoryTicketModel"

const HistoryTicket = db.define<HistoryTicketModel>('HistoryTicket', {
    message: DataTypes.STRING,
    ticketid: DataTypes.NUMBER,
    date_creation: {
        type: DataTypes.DATE
    },
    title: DataTypes.STRING,
    senderid: DataTypes.NUMBER,
    img: DataTypes.TEXT
}, {
    timestamps: false,
    tableName: 'ticket_history'
});

export {
 HistoryTicket
}