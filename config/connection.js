//DECLARATIONS: sequelize, dotenv ------------------
const Sequelize = require('sequelize');
require('dotenv').config();

//create var sequelize, going to define it depending on enviornment
let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}

//EXPORT SEQUELIZE DB CONNECTION ----------------
module.exports = sequelize;
