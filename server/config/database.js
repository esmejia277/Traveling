const Sequelize = require('sequelize');
require('dotenv').config({ path: 'vars.env' })

module.exports = new Sequelize(process.env.DB_NAME, process.env.DB_USER , process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});
