import db from "../database/database.js"
import { DataTypes } from "sequelize"
const Pacientes = db.define("pacientes", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    idade: {
        type: DataTypes.DATE
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAT: {
        type: DataTypes.DATE
    }
}, {
    tableName: "pacientes",
})

export default Pacientes