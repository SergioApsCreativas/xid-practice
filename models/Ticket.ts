import { DataTypes } from 'sequelize';
import { db } from "../config/sequelize/config.sequelize"
import { TicketModel } from "../interfaces/TicketModel"

const Ticket = db.define<TicketModel>('Ticket', {
    departmentid: DataTypes.NUMBER,
    issue: DataTypes.STRING,
    status: DataTypes.ENUM('ATENDIDO', 'NO_ATENDIDO', 'EN_PROGRESO', 'FINALIZADO', 'CERRADO'),
    urgence: DataTypes.ENUM('NORMAL', 'URGENTE', 'MEDIO'),
    time_response: DataTypes.DATE,
    img: DataTypes.STRING(300),
    description: DataTypes.TEXT,
    clientid: DataTypes.NUMBER,
    userattendedid: DataTypes.NUMBER,
    useractiveid: DataTypes.NUMBER
}, {
    tableName: 'ticket'
});

export {
    Ticket
}