const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const Player = sequelize.define("Player", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    challengesCompleted: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    score: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    lastChallenge: {
        type: DataTypes.TEXT,
        defaultValue: "",
    },
});

module.exports = Player;
