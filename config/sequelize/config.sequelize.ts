import { Sequelize } from "sequelize";
import { environment } from "../../environments/environment"


const db = new Sequelize(environment.rds.DB_NAME, environment.rds.DB_USERNAME, environment.rds.DB_PASSWORD, {
    host: environment.rds.DB_HOST,
    dialect: 'mariadb',
    dialectModule: require('mariadb')
});

export { db };