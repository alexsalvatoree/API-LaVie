//Importações
import express from "express"
import db from './database/database.js'
import routes from "./routes/index.js"


const app = express()
//Conexão banco de dados
db.hasConection()

//Chamada do Express

app.use(express.json())

app.use(routes)

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
