const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        port: process.env.DB_PORT,
        logging: false, // Set to true to debug queries
    }
);

// Test Database Connection
sequelize.authenticate()
    .then(() => console.log("✅ MySQL Database Connected!"))
    .catch((err) => console.error("❌ Error: ", err));

module.exports = sequelize;
