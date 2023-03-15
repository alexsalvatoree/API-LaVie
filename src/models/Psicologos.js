import db from "../database/database.js"
import { DataTypes } from "sequelize"
const Psicologos = db.define("psicologos", {
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
    senha: {
        type: DataTypes.STRING
    },
    apresentacao: {
        type: DataTypes.TEXT
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAT: {
        type: DataTypes.DATE
    }
}, {
    tableName: "psicologos"
})

export default Psicologos