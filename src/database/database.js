import Sequelize from "sequelize";

const DB_NAME = 'lavie'
const DB_USER = 'root'
const DB_PASS = '2119Amor@'
const DB_CONFIG = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
}

//Objeto para guarda conexão do banco de Dados
let db = {}

try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG)
} catch (error) {
    console.error("error ao tentar conexão com banco de dados")
}

async function hasConection() {
    try {
        await db.authenticate()
        console.log('Banco de Dados Conectado')
    } catch (error) {
        console.error('Error ao tentar se conectar ao banco de Dados')
    }
}

Object.assign(db, {
    hasConection
})

export default db