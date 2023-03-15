import db from "../database/database.js"
import { DataTypes } from "sequelize"
const Atendimentos = db.define("atendimentos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    data_nascimento: {
        type: DataTypes.DATE
    },
    observacao: {
        type: DataTypes.TEXT
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAT: {
        type: DataTypes.DATE
    }
}, {
    tableName: "atendimentos",
})

export default Atendimentos