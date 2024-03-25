require('dotenv').config();
const sequelize = require('sequelize');

let sequelize
if (process.env.JAWSDB_URL) {
    sequelize = new sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = sequelize(
        process.env.DB_NAME, 
        process.env.DB_user, 
        process.env.DB_PASSWORD,
        {
         host: 'localhost', 
         dialect: 'mysql',
         port: 3306
        }
    );

}

