export const environment = {
    production: false,
    rds:{
        secretId: "dev/tickets/mariaDB",
        JWT_SECRET: "qwe1234",
        DB_DIALECT: "mariadb",
        DB_NAME: "tickets",
        DB_USERNAME: "admin",
        DB_PASSWORD: "123456789",
        DB_HOST: "tickets.cwiorlydu3pr.us-east-1.rds.amazonaws.com",
        DB_PORT: "3306"
    },
    ...process.env
};
